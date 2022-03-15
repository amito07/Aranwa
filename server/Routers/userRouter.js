import express from 'express';
import { AddUser } from '../Controllers/userController.js';

const router = express.Router();

router.post('/add',AddUser)

export default router;