import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import router from './Routers/userRouter.js';



const app = express();
app.use(bodyParser.json({limit:"100mb"}));
app.use(cors());
app.use(helmet());

app.use('/api/v1',router)


export default app;



