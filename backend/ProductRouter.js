import express from "express"
import ProductModel from "./DB/ProductModel.js"
const ProductRouter = express.Router()
import multer from "multer";
import path from "path"

ProductRouter.get("/",async(req, res) =>{
    const existingProducts = await ProductModel.find()
    console.log(existingProducts);
    res.json(existingProducts)
})

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, callback) {
        // Use the student's name as the filename and keep the original extension
        const ext = path.extname(file.originalname);
        const filename = req.body.name + ext;
        callback(null, filename);
    },
})
const upload = multer({ storage: storage });

ProductRouter.post("/add",upload.single("photo"), async(req, res) => {
    const {name,price,category,company} =req.body
    let photo= req.file
    photo=photo.path
    let productToAdd= new ProductModel({name, price,category,company,photo})
let result=await productToAdd.save();
res.json(result)
  
})


export default ProductRouter