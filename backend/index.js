require('dotenv').config()
const express=require("express");
const mongoose=require("mongoose");
const PORT=process.env.PORT || 3002;
const URL=process.env.MONGO_URL;
const app=express();
mongoose.connect(URL).then((res)=>{
    console.log("database connection successfull")
})
app.listen(PORT,()=>{
    console.log("app is listening");
})