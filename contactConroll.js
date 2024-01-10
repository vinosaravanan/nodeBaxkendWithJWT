const asynchandler = require('express-async-handler');
const Contact = require('./model/contactModel')

const GetAllContact = asynchandler( async(req, res)=> {
    console.log(req.user.id);
   let contact = await Contact.find({user_id: req.user.id})
    res.status(200).json(contact)
})

const PostContact = asynchandler( async(req, res, next)=> {

    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All Fields are mandatory')
    }
    let contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(200).json(contact)
 })

 
const getContactByid = asynchandler( async(req, res)=> {
     let contactbyId = await Contact.findById(req.params.id)
      if (!contactbyId) {
         res.status(404).json({err:"contact not fount"})
      }

    res.status(200).json({contactbyId})

})


const updateContact = asynchandler(async(req, res)=> {
     let contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact id not found")
    }

   if (contact.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User son't have permission to update other user contact")
   }


   let updatecontact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
   )

    res.status(200).json({updatecontact})
})

const deleteContact = asynchandler(async(req, res)=> {
    let contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact id not found")
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User son't have permission to update other user contact")
   }

       await Contact.deleteOne({_id:req.params.id})

    res.json({message:`This delete Method is deleted All contact Using By ${req.params.id}`})
})

 module.exports = {
    PostContact,
    GetAllContact,
    getContactByid,
    updateContact,
    deleteContact
 }