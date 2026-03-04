const{model}=require("mongoose");
const {OrderSchemas}=require("../schemas/OrderSchemas");
const OrderModel=new model("OrderModel",OrderSchemas);
module.exports={OrderModel};
