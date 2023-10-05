import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    company:String,
    photo:Object
}) 


const ProductModel = mongoose.model("products",ProductSchema)
export default ProductModel;
