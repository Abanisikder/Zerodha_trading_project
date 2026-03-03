const {model}=require("mongoose");
const {HoldingSchemas}=require("../schemas/HoldingSchemas");
const HoldingModel=new model(" HoldingModel",HoldingSchemas);
module.exports={HoldingModel};