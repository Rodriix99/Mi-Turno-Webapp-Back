"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const branchControllers_1 = require("../controllers/branchControllers");
router.get("/", branchControllers_1.branches, (req, res) => res.json('getting branches'));
router.get("/:id", branchControllers_1.pickedBranch, (req, res) => res.json('getting a picked branch'));
router.post("/", branchControllers_1.createdBranch, (req, res) => res.json('posting a new branch'));
exports.default = router;
