import express from "express";
import {
  createBooking,
  getAllBookings,
} from "../controllers/bookingControllers";
const router = express.Router();

router.post("/createBooking", createBooking);
router.get("/getAllBookings", getAllBookings);

export default router;
