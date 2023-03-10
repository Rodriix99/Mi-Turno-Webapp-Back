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
exports.findOneUser = exports.findAllUsers = exports.me = exports.login = exports.register = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const token_1 = require("../config/token");
const token_2 = require("../config/token");
const Admin_1 = __importDefault(require("../models/Admin"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { fullName, email, password, dni, usertype } = req.body;
        const exists = yield Users_1.default.findOne({ email });
        if (exists)
            return res.sendStatus(400);
        const newUser = new Users_1.default({
            fullName,
            email,
            password,
            dni,
            usertype,
        });
        yield newUser.save();
        res.send(newUser);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(401);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield Users_1.default.findOne({ email });
        const admin = yield Admin_1.default.findOne({ email });
        const result = [user, admin];
        const resultado = result.filter((e) => e !== null);
        console.log(resultado[0]);
        if (!resultado[0])
            return res.sendStatus(400);
        const isMatch = yield resultado[0].comparePassword(password);
        if (!isMatch)
            return res.sendStatus(400);
        if (resultado[0].userType === "user" ||
            resultado[0].userType === "operator") {
            const payload = {
                fullName: resultado[0].fullName,
                email: resultado[0].email,
                dni: resultado[0].dni,
                usertype: resultado[0].usertype,
                booking: resultado[0].booking,
                branch: resultado[0].branch,
            };
            const token = (0, token_1.generateToken)(payload);
            res.send([payload, token]);
        }
        else {
            const payload = {
                fullName: resultado[0].fullName,
                email: resultado[0].email,
                dni: resultado[0].dni,
                usertype: resultado[0].usertype,
            };
            const token = (0, token_1.generateToken)(payload);
            res.send([payload, token]);
        }
    }
    catch (err) {
        console.log(err);
        res.sendStatus(401);
    }
});
exports.login = login;
const me = (req, res) => {
    try {
        const { token } = req.body;
        if (!token)
            return res.sendStatus(400);
        const { user } = (0, token_2.validateToken)(token);
        res.send(user);
    }
    catch (err) {
        console.log(err);
        res.send(401);
    }
};
exports.me = me;
const findAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield Users_1.default.find({});
        res.send(allUsers);
    }
    catch (err) {
        console.log(err);
        res.send(401);
    }
});
exports.findAllUsers = findAllUsers;
const findOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const findUser = yield Users_1.default.findById(id);
        res.send(findUser);
    }
    catch (err) {
        console.log(err);
        res.send(401);
    }
});
exports.findOneUser = findOneUser;
