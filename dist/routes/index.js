"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./users.routes"));
const branch_routes_1 = __importDefault(require("./branch.routes"));
const booking_routes_1 = __importDefault(require("./booking.routes"));
const admin_routes_1 = __importDefault(require("./admin.routes"));
const router = express_1.default.Router();
router.use("/users", users_routes_1.default);
router.use("/admin", admin_routes_1.default);
router.use("/branches", branch_routes_1.default);
router.use("/booking", booking_routes_1.default);
exports.default = router;
