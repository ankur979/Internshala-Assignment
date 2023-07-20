const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: {
        type: String
    },
    usernmae:{
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("user",userModel);