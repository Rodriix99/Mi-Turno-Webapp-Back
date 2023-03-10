"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingControllers_1 = require("../controllers/bookingControllers");
const router = express_1.default.Router();
router.post("/createBooking", bookingControllers_1.createBooking);
router.get("/getAllBookings", bookingControllers_1.getAllBookings);
exports.default = router;
