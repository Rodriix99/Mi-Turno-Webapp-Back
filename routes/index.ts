import express from "express";
import userRoutes from "./users.routes";
import  branchesRoutes  from "./branch.routes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/branches", branchesRoutes)

export default router;
