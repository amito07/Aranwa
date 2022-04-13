import express from 'express';
import { otp_get_secret,otp_verification } from '../Controllers/otpController.js';


const route = express.Router();

route.post('/verify',otp_verification)
route.post('/:id',otp_get_secret)

export default route;