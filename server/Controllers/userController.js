import User from "../Models/userModel.js";

export const AddUser = async(req,res)=>{
    console.log(req.body);
    let info = {
        email: req.body.email,
        password:req.body.password
    }
    const user = await User.create(info)
    res.status(200).send(user)

}