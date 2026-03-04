const{Schema}=require("mongoose");
const OrderSchemas=new Schema({
    name:{
        type:String,
        required,
    },
    qty:{
        type:Number,
        required,
        min:0,
    },
    price:{
        type:Number,
        required,
    },
    mode:{
        type:String,
    }

});
module.exports={OrderSchemas};