import express from "express";
import userRoutes from "./users.routes";
import  branchesRoutes  from "./branch.routes";
import booking from "./booking.routes";
const router = express.Router();

router.use("/users", userRoutes);
router.use("/branches", branchesRoutes)

router.use("/booking", booking);

export default router;
