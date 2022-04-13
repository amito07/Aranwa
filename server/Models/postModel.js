import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Post =  sequelize.define('post',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    body:{
        type:DataTypes.STRING,
        allowNull:false
    },
    uid:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:true,
},)

await Post.sync();

export default Post;