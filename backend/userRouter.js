import Express from "express";
import UserModel from "./DB/userModel.js";
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";


const UserRouter = Express.Router();

const secretKey = 'omender-shekhawat'

UserRouter.post("/register", async (req, res) => {
    let { name, email, username, password } = req.body
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.error(err);
            return null

        }
        else {
            password = hash
            let usertoRegisster = new UserModel({ name, email, username, password })
            let result = await usertoRegisster.save()
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
UserRouter.post("/login", async (req, res) => {
    if (req.body.username && req.body.password) {
        let usertologin = await UserModel.findOne({
            username: req.body.username
        })
        bcrypt.compare(req.body.password, usertologin.password, (err, result) => {
            if (err || !result) {
                res.json({ message: "password Incorrect" })

            } else {
                // const payload = {username: usertologin.username,_Id : usertologin._id};
                res.json(usertologin)


            }
        })
    }
})

export default UserRouter
