const {Schema}=require("mongoose");
const PositionSchemas=new Schema({
     product: {
        type:String,
        required,
         maxLength:50,

     },
    name: {
        type:String,
        required,
    },
    qty: {
        type:Number,
        min:0,
        required,
        default:0,
    },
    avg: {
        type:Number,
    },
    price: {
        type:Number,
        required,
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