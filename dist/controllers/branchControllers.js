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
exports.deleteBranch = exports.updateBranch = exports.createBranch = exports.getBranch = void 0;
const Branch_1 = __importDefault(require("../models/Branch"));
const getBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const branchId = req.params.id;
        const result = yield Branch_1.default.findById(branchId);
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ message: 'Sucursal no encontrada' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la sucursal' });
    }
});
exports.getBranch = getBranch;
const createBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, location, phone, email } = req.body;
    try {
        const branch = new Branch_1.default({ name, location, phone, email });
        yield branch.save();
        res.status(201).json(branch);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating branch' });
    }
});
exports.createBranch = createBranch;
const updateBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, location, phone, email } = req.body;
    try {
        const branch = yield Branch_1.default.findById(id);
        if (!branch) {
            res.status(404).json({ message: 'Branch not found' });
            return;
        }
        branch.name = name;
        branch.location = location;
        branch.phone = phone;
        branch.email = email;
        yield branch.save();
        res.json(branch);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating branch' });
    }
});
exports.updateBranch = updateBranch;
const deleteBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const branch = yield Branch_1.default.findByIdAndDelete(id);
        if (!branch) {
            res.status(404).json({ message: 'Branch not found' });
            return;
        }
        res.json(branch);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting branch' });
    }
});
exports.deleteBranch = deleteBranch;
