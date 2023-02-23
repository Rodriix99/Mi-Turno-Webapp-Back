"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const validations_1 = require("../middlewares/validations");
const router = express_1.default.Router();
router.post("/createoperator", validations_1.validateAdmin, adminController_1.createOperator);
router.post("/asignbranch", validations_1.validateAdmin, adminController_1.asignbranch);
exports.default = router;
