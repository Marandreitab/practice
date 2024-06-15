import { Router } from "express";
const groupRouter = Router();

import { getAllUsers } from "../controller/userController.js";

groupRouter.get('/all', getAllUsers)

export default groupRouter