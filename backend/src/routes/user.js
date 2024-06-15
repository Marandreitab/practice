import { Router } from "express";
const userRouter = Router();

import { getAllUsers, createUser, deleteUser, updateUser } from "../controller/userController.js";

userRouter.get('/', getAllUsers)
userRouter.post('/', createUser)
userRouter.delete('/:id', deleteUser)
userRouter.patch('/:id', updateUser)


export default userRouter