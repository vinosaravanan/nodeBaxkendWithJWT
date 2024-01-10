const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({

    userName:{
        type:String,
        required:[true, "please add the user name"]
    },
    email:{
        type:String,
        required:[true, "please add the user email address"],
        unique:[true, "Email address already taken"]
    },
    password:{
        type:String,
        required:[true, "please add the user passeword"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', UserShema)