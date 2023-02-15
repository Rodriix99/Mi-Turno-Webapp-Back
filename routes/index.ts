import express from "express";
import userRoutes from "./users.routes";
import booking from "./booking.routes";
const router = express.Router();

router.use("/users", userRoutes);

router.use("/booking", booking);

export default router;
