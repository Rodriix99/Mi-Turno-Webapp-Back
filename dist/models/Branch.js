"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const branchSchema = new mongoose_1.Schema({
    ubication: {
        type: String,
        required: true,
    },
    coordinates: {
        type: String,
        required: true
    },
    booking: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Booking",
        },
    ],
});
exports.default = (0, mongoose_1.model)("Branch", branchSchema);
