import express from "express";
import { createOperator } from "../controllers/adminController";
import { validateAdmin } from "../middlewares/validations";

const router = express.Router();

router.post("/createoperator", validateAdmin, createOperator);

export default router;
