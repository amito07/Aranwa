import Post from "../Models/postModel.js";
import User from "../Models/userModel.js";

export const AddUser = async(req,res)=>{
    console.log(req.body);
    let info = {
        email: req.body.email,
        password:req.body.password
    }
    const user = await User.create(info)
    if(user){
        res.status(200).send(user)
    }else{
        res.status(400).send("Email or password Invalid")
    }

}

export const getUsersPost = async(req,res)=>{
    const userPosts = await User.findAll({
        include: {
            model:Post,
            as: 'Post Details'
        }
    })
    if(userPosts){
        res.send(userPosts)
    }else{
        res.status(400).send("Error")
    }
}