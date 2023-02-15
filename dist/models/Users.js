"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const model = mongoose_1.default.model;
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    dni: {
        type: Number,
        require: true,
        unique: true,
    },
    usertype: {
        type: String,
        enum: ["admin", "operator", "user"],
        require: true,
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: "branch",
    },
    booking: {
        type: Schema.Types.ObjectId,
        ref: "booking",
    },
});
exports.default = model("User", userSchema);
