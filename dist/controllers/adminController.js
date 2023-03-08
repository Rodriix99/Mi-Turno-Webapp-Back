"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAdmin = exports.asignbranch = exports.createOperator = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const Branch_1 = __importDefault(require("../models/Branch"));
const Admin_1 = __importDefault(require("../models/Admin"));
const createOperator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email, password, dni, usertype } = req.body;
        const newOperator = new Users_1.default({ fullName, email, password, dni, usertype });
        yield newOperator.save();
        res.send(newOperator);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});
exports.createOperator = createOperator;
const asignbranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { opId, branchId } = req.body;
        const operator = yield Users_1.default.findById(opId);
        const branch = yield Branch_1.default.findById(branchId);
        yield (operator === null || operator === void 0 ? void 0 : operator.updateOne({ branch: [...operator.branch, branch === null || branch === void 0 ? void 0 : branch.id] }));
        yield (operator === null || operator === void 0 ? void 0 : operator.save());
        res.send(operator);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});
exports.asignbranch = asignbranch;
//
const registerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, dni, email, password, usertype } = req.body;
        const exists = yield Admin_1.default.findOne({ email });
        if (exists)
            return res.sendStatus(400);
        const admin = new Admin_1.default({ fullName, dni, email, password, usertype });
        yield admin.save();
        res.send(admin);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(401);
    }
});
exports.registerAdmin = registerAdmin;
