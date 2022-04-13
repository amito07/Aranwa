import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import UserRouter from './Routers/userRouter.js';
import postRouter from './Routers/postRouter.js';
import otpRouter from './Routers/otpRouter.js';



const app = express();
app.use(bodyParser.json({limit:"100mb"}));
app.use(cors());
app.use(helmet());

app.use('/api/user',UserRouter)
app.use('/api/post',postRouter)
app.use('/api/otp',otpRouter)


export default app;



