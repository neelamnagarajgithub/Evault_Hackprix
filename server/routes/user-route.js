import { createuser } from "../controllers/user-controller.js";
import express from 'express';

const userRouter=express.Router();

userRouter.route('/user').post(createuser);

export default userRouter;