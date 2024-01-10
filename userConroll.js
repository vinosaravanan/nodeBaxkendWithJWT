const User = require('./model/UserModel');
const bcrypt = require('bcrypt')
const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const registerUser = asynchandler( async (req, res)=> {
     const {userName, email, password} = req.body;

     if (!userName ||  !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
     }

  let exitingEmail = await User.findOne({email})

   if (exitingEmail) {
      res.status(404);
      throw new Error("User already register")
   }
  
   const haspassword = await bcrypt.hash(password, 10);
   console.log('haspassword', haspassword);
   const user = await User.create({
    userName,
    email,
    password:haspassword
   })

    if (user) {
        res.status(201).json({_id:user.id, email:user.email})
    } else {
        res.status(404);
        throw new Error("user data not valid")
    }

    // res.json({dada:" registe the user"})
})

const loginUser = asynchandler( async (req, res)=> {

     const {password, email} = req.body;
     if (!password || !email) {
        res.status(401);
        throw new Error("All field are mandatory")
     }

    const user = await User.findOne({email});
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
           user:{
            username:user.userName,
            email:user.email,
            id:user.id
           },
        },'vinod123',
        {expiresIn:"15m"});
        res.status(200).json({accessToken})

    } else {
        res.status(401);
        throw new Error("email or password is not valid")
    }
})

const CurrentUser = asynchandler( async (req, res)=> {
    res.json(req.user)
})



module.exports = {
    registerUser, 
    loginUser, 
    CurrentUser
}