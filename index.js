const express = require("express");
const app = express();
const bp = require("body-parser");
const dotenv = require("dotenv");
const userModel = require("./model/userModel");
dotenv.config()
require("./config/config")

app.use(bp.json());

const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public" + "/index.html");
})

app.route("/user")
.get(async(req,res)=>{
    const user = await userModel.find()
    res.send(user)
})
.put(async(req,res)=>{
    let user = await userModel.updateOne({_id:req.query.id},{$set:{name:req.body.name}})
    res.send(user)
})
.delete(async(req,res)=>{
    await userModel.findByIdAndDelete(req.query.id)
    res.send({message:"Deleted successfully"})
})
.post(async(req,res)=>{
    const user = await userModel.create(req.body)
    res.status(201).send(user)
})



app.listen(port,()=>{
    console.log("server running")
})