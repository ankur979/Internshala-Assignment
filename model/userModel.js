const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: {
        type: String
    },
    usernmae:{
        type: String
    },
    email:{
        type: String
    }, 
    password:{
        type: String
    },
    mobile:{
        type:Number
    },
    password:{
        type: String
    },
    mobile:{
        type:Number
    },
    changePassword:{
        type: String
    },
    mobile:{
        type:Number
    },
}, { timestamps: true });

module.exports = mongoose.model("user",userModel);