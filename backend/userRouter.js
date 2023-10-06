import Express from "express";
import UserModel from "./DB/userModel.js";
import bcrypt from 'bcrypt'


const UserRouter = Express.Router();

UserRouter.post("/register", async (req, res) => {
    let { name, email, username, password } = req.body
    let usertoRegisster = new UserModel({ name, email, username, password })
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error(err);

        }
        else {

            console.log('Hash Password:', hash);

        }
        console.log(usertoRegisster);
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
        let usertologin = await UserModel.findOne(req.body).select("-password")

        if (usertologin) {
            res.send(usertologin)
        } else {
            res.send({ result: "no user found" })
        }
    }
    else {
        res.send({ result: "Plzz Enter both fields" })
    }
})

export default UserRouter
