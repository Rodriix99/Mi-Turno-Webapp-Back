import { Router } from "express";
const router = Router();

import {
  getAllBranch,
  getBranch,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../controllers/branchControllers";

router.get("/branches/:page", getAllBranch);

router.get("/branches/:id", getBranch, (req, res) =>
  res.json("getting single branch")
);

router.post("/createbranch", createBranch, (req, res) =>
  res.json("posting a new branch")
);

router.put("/branches/:id", updateBranch, (req, res) =>
  res.json("updating a branch")
);

router.delete("/branches/:id", deleteBranch, (req, res) =>
  res.json("getting a picked branch")
);

export default router;
