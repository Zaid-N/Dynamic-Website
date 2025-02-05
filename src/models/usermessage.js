const mongoose=require('mongoose');

var validator = require("validator");
 
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id");
            }
        }
    },
    phone:{
        type:String,
        required:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})

//we need a collection

const User=mongoose.model("User",userSchema);

module.exports=User;