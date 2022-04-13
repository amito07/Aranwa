import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const OTP = sequelize.define("OTP",{
    uid:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    opt_secret:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps:true,
}
)

export default OTP;