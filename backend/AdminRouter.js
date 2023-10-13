import Express from "express";
import AdminModel from "./DB/AdminModel.js";
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";


const AdminRouter = Express.Router();

const secretKey = 'omender-shekhawat'

AdminRouter.post("/register", async (req, res) => {
    let { name, email, adminame, password } = req.body
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.error(err);
            return null

        }
        else {
            password = hash
            let admintoRegisster = new AdminModel({ name, email, admniname, password })
            let result = await admintoRegisster.save()
            res.json(result)
        }
    })
}
)
// UserRouter.post("/register",async(req,res)=>{
//     let UsertoRegister = new UserModel(req.body)
//     let result = await UsertoRegister.save()

//     res.json (result)
// });
AdminRouter.post("/login", async (req, res) => {
    if (req.body.adminname && req.body.password) {
        let admintologin = await AdminModel.findOne({
            adminname: req.body.adminname
        })
        bcrypt.compare(req.body.password, Admintologin.password, (err, result) => {
            if (err || !result) {
                res.json({ message: "password Incorrect" })

            } else {
                // const payload = {username: usertologin.username,_Id : usertologin._id};
                res.json(admintologin)


            }
        })
    }
})

export default AdminRouter
