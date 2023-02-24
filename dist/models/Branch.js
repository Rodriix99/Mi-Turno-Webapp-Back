"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const branchSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    booking: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Booking",
        },
    ],
    operator: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Users",
        },
    ],
});
exports.default = (0, mongoose_1.model)("Branch", branchSchema);
