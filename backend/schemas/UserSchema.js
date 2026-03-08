const {Schema}=require("mongoose");
const UserSchema=new Schema({
    username:{
        type:String,
        required:[true, "Your username is required"],

    },
    password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
module.exports=UserSchema;