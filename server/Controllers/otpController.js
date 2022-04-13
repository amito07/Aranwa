import OTP from "../Models/otpModel.js"
import speakeasy from 'speakeasy';

export const otp_get_secret = async(req,res)=>{
    const userID = req.params.id;
    const temp_secret = speakeasy.generateSecret()
    const otp_info = {
        uid:userID,
        opt_secret:temp_secret.base32
    }

    const otp_response = await OTP.create(otp_info)
    if(otp_response){
        res.json(otp_response)
    }else{
        res.json({"message":"Error"})
    }

}

export const otp_verification = async(req,res)=>{
    const {token,uid} = req.body;
    console.log('Hit');
    const otp_verify = await OTP.findOne({
        where:{
            uid: uid
        }
    })
    const {opt_secret} = otp_verify;
    const verified = speakeasy.totp.verify({
        secret:opt_secret,
        encoding: 'base32',
        token
      });
    
    console.log(verified); 
    if(verified){
        res.json({"message":"user logged in successfully"})
    }else{
        res.json({"message":"Error"})
    }

}