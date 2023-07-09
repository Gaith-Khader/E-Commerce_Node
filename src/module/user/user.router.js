import { Router } from "express";
import * as UserController from './controller/user.controller.js'
import auth from "../../middleware/auth.js"
const router = Router();

router.get('/', UserController.getUsers);
router.patch('/update/',auth,UserController.updateUser);
router.delete('/delete/',auth,UserController.deleteUser);

export default router;