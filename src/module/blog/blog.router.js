import { Router } from "express";
import * as BlogController from './controller/blog.controller.js'
const router = Router();

router.get('/', BlogController.getBlogs);
router.post('/add', BlogController.addBlog);

export default router;