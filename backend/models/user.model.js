const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:5,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    }
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);