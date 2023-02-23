"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdmin = exports.validateAdminAndOp = void 0;
const token_1 = require("../config/token");
const validateAdminAndOp = (req, res, next) => {
    const { token } = req.body;
    if (!token)
        return res.sendStatus(401);
    const { user } = (0, token_1.validateToken)(token);
    if (!user)
        return res.sendStatus(401);
    if (user.usertype === "user")
        return res.sendStatus(401);
    next();
};
exports.validateAdminAndOp = validateAdminAndOp;
const validateAdmin = (req, res, next) => {
    const { token } = req.body;
    if (!token)
        return res.sendStatus(401);
    const { user } = (0, token_1.validateToken)(token);
    if (!user)
        return res.sendStatus(401);
    if (user.usertype === "user" || user.usertype === "operator")
        return res.sendStatus(401);
    next();
};
exports.validateAdmin = validateAdmin;
