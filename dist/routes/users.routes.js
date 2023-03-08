"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const validations_1 = require("../middlewares/validations");
const router = express_1.default.Router();
router.post("/register", user_controller_1.register);
router.post("/login", user_controller_1.login);
router.post("/me", user_controller_1.me);
router.post("/findAll", validations_1.validateAdminAndOp, user_controller_1.findAllUsers);
router.post("/findOne/:id", validations_1.validateAdminAndOp, user_controller_1.findOneUser);
router.put("/updateUser", user_controller_1.updateUser);
exports.default = router;
