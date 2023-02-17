import express from "express";
import {
  register,
  login,
  me,
  findAllUsers,
  findOneUser,
} from "../controllers/user.controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/me", me);
router.get("/findAll", findAllUsers);
router.get("/findOne/:id", findOneUser);

export default router;
