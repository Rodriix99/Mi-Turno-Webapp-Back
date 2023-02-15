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
exports.createdBranch = exports.pickedBranch = exports.branches = void 0;
const Branch_1 = __importDefault(require("../models/Branch"));
const branches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const branchLocations = yield Branch_1.default.findOne({ ubication: req.body.ubication });
    if (!req.body.ubication) {
        return res.status(400).json({ msg: "esa localidad no existe" });
    }
    res.status(200).send(branchLocations);
});
exports.branches = branches;
const pickedBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const branches = yield Branch_1.default.findById(id);
    res.status(200).send(branches);
});
exports.pickedBranch = pickedBranch;
const createdBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ubication, coordinates } = req.body;
    const newBranch = new Branch_1.default({
        ubication,
        coordinates
    });
    try {
        const savedBranch = yield newBranch.save();
        res.send(savedBranch);
    }
    catch (error) {
        res.status(401).send("No se pudo crear una sucursal");
    }
});
exports.createdBranch = createdBranch;
