import express from 'express'
import { addPost } from '../Controllers/postController.js'

const router = express.Router()

router.post('/addPost/:id',addPost)
// router.get('/getAllPost',getAllPost)

export default router;