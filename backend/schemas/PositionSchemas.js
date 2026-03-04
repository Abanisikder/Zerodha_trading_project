const {Schema}=require("mongoose");
const PositionSchemas=new Schema({
     product: {
        type:String,
        required:true,
         maxLength:50,

     },
    name: {
        type:String,
        required:true,
    },
    qty: {
        type:Number,
        min:0,
        required:true,
        default:0,
    },
    avg: {
        type:Number,
    },
    price: {
        type:Number,
        required:true,
        min:0,
    },
    net:{
        type:String,
    },
    day: {
        type:String,
    },
    isLoss: {
        type:Boolean,
    },

});
module.exports={PositionSchemas};