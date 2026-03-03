const {Schema}=require("mongoose");
const HoldingSchemas=new Schema({
    name: {
        type:String,
        maxLength:50,
        required,
    },
    qty: {
        type:Number,
        default:0,
        max:100,
    },
    avg: {
        type:Number,
    },
    price: {
        type:Number,
        required,
        default:0,
        min:0,
    },
    net:{
        type:String
    },
    day: {
        type:String
    },

});
module.exports={HoldingSchemas};