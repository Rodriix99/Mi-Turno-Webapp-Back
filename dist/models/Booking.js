"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    branch: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Branch",
    },
    reservationDate: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
    },
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    available: {
        type: Boolean,
        default: false,
    },
});
exports.default = (0, mongoose_1.model)("Booking", bookingSchema);
