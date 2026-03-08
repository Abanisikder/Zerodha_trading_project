const {model}=require("mongoose");
const {UserSchemas}=require("../schemas/UserSchemas");
const UserModel=new model("UserModel",UserSchemas);
module.exports=UserModel;