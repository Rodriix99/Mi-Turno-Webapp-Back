import express from "express";
import {
  register,
  login,
  me,
  findAllUsers,
  findOneUser,
  updateUser,
} from "../controllers/user.controller";
import { Request, Response } from "express";

import { validateAdminAndOp } from "../middlewares/validations";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/me", me);
router.post("/findAll", validateAdminAndOp, findAllUsers);
router.post("/findOne/:id", validateAdminAndOp, findOneUser);
router.put("/updateUser", updateUser);

export default router;
