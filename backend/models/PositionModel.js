const{model}=require("mongoose");
const {PositionSchemas}=require("../schemas/PositionSchemas");
const PositionModel=new model("PositionModel",PositionSchemas);
module.exports={PositionModel};
