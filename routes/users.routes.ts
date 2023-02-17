import express from "express";
import { Request, Response } from "express";
import { register } from "../controllers/user.controller";

const router = express.Router();

router.post("/register", register);

// router.get("/example", (req: Request, res: Response) => {
//   console.log(process.env.SECRET);
//   res.sendStatus(200);
// });
export default router;
