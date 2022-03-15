import dotenv from 'dotenv';
import app from './app.js';
import {sequelize} from './Models/index.js'

dotenv.config()

const PORT = process.env.PORT || 8080;

sequelize
.sync({ force: true })
.then(()=>{
    console.log("Connection has been established successfully.");
    app.listen(PORT,()=>{
        console.log(`The server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error(`Unable to connect to the database `,err)
})