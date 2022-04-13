import Post from "../Models/postModel.js"
import User from "../Models/userModel.js";

export const addPost = (req,res)=>{
    const {title,body} = req.body;
    const userId = req.params.id;
    const postInfo = {
        title: title,
        body: body,
        uid:userId
    }
    const post = Post.create(postInfo)
    if(post){
        res.status(200).send("Post Add")
    }else{
        res.status(404).send("Something went wrong")
    }
}

// export const getAllPost = async(req,res)=>{
//     const allpost = await Post.findAll({
//         include: User
//     })
//     console.log(allpost);
//     res.send(allpost)
// }