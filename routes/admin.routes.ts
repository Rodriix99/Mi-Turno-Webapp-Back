import express from "express";
import { createOperator, asignbranch } from "../controllers/adminController";
import { validateAdmin } from "../middlewares/validations";

const router = express.Router();

router.post("/createoperator", validateAdmin, createOperator);
router.post("/asignbranch", validateAdmin, asignbranch);
export default router;
//
