const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    
    user_id:{
        type:String,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true, "pleas add contact name"]
    },
    email:{
        type:String,
        required:[true, "pleas add contact email"]
    },
    phone:{
        type:String,
        required:[true, "pleas add contact phone number"]
    },
},{
    timestamps:true
})

module.exports = mongoose.model('Contact', ContactSchema)