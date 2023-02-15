"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    branchId: {
        type: Number,
        require: true,
    },
    schedule: {
        type: Date,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    available: {
        type: Boolean,
        default: false,
    },
});
exports.default = (0, mongoose_1.model)("Booking", bookingSchema);
