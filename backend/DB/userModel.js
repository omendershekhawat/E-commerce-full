import mongoose from "mongoose";
const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    username:String,
    password:String
});

const UserModel= mongoose.model("users", UserSchema);
export default UserModel