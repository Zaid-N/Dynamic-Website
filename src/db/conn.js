const mongoose=require('mongoose');

//creating a db
mongoose.connect("mongodb://localhost:27017/zaid'sdynamic").then(()=>{
    console.log('conn successfull');
}).catch((error)=>{
    console.log(error);
})
