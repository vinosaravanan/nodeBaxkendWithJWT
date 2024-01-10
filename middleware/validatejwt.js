const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asynchandler(async(req, res, next)=> {

  let token;
  let authheater = req.header('Authorization') || req.header('authorization');
  console.log(authheater);

  if (authheater && authheater.startsWith('Bearer')) {

      token = authheater.split(" ")[1];
      jwt.verify(token,'vinod123', (err, decoded)=> {
          if (err) {
            res.status(401);
            throw new Error("user is not authorization")
          }
          req.user = decoded.user;
          console.log(req.user);
          next()
      });
      
   if (!token) {
      res.status(401);
      throw new Error('User is not authorization or token is missing') 
   }

  }
})

module.exports = validateToken