import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const User =  sequelize.define('user',{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps:true,
},)

export default User;