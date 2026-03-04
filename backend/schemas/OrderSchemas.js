const{Schema}=require("mongoose");
const OrderSchemas=new Schema({
    name:{
        type:String,
        required:true,
    },
    qty:{
        type:Number,
        required:true,
        min:0,
    },
    price:{
        type:Number,
        required:true,
    },
    mode:{
        type:String,
    }

});
module.exports={OrderSchemas};