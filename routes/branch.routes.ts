import { Router } from 'express'
const router = Router()

import { branches, pickedBranch, createdBranch } from "../controllers/branchControllers";
  
  router.get("/", branches, (req, res)=> res.json('getting branches'));
  
  router.get("/:id", pickedBranch, (req, res)=> res.json('getting a picked branch'));
  
  router.post("/", createdBranch, (req, res)=> res.json('posting a new branch'));

export default router