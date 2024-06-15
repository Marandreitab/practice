import { Router } from "express";
const router = Router();

import userRouter from "./user.js";
import groupRouter from "./group.js";

router.use('/users', userRouter);
router.use('/groups', groupRouter);

export default router