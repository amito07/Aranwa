import express from 'express';
import { AddUser,getUsersPost } from '../Controllers/userController.js';

const router = express.Router();

router.post('/addUser',AddUser)
router.get('/userpost',getUsersPost)
// router.get('/allUserPosts',getPosts)

export default router;