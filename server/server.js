import dotenv from 'dotenv';
import app from './app.js';
import {sequelize} from './Models/index.js'
import User from './Models/userModel.js';
import Post from './Models/postModel.js';
import OTP from './Models/otpModel.js';
dotenv.config()

const PORT = process.env.PORT || 8080;

User.hasOne(Post,{foreignKey:'uid',as:'Post Details'})
Post.belongsTo(User,{foreignKey:'uid'})

// OTP.sync({force:true})

sequelize
// .sync({force:true})
.authenticate()
.then(()=>{
    console.log("Connection has been established successfully.");
    app.listen(PORT,()=>{
        console.log(`The server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error(`Unable to connect to the database `,err)
})