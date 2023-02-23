"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const adminSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    dni: {
        type: Number,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    usertype: {
        type: String,
        enum: ["user", "operator", "admin"],
        default: "admin",
        require: true,
    },
});
const Admin = mongoose_1.default.model('Admin', adminSchema);
exports.default = Admin;
