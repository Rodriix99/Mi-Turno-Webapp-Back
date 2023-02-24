import { Request, Response } from "express";
import User from "../models/Users";
import Branch from "../models/Branch";
export const createOperator = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, dni, usertype } = req.body;
    const newOperator = new User({ fullName, email, password, dni, usertype });
    await newOperator.save();
    res.send(newOperator);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const asignbranch = async (req: Request, res: Response) => {
  try {
    const { opId, branchId } = req.body;
    const operator = await User.findById(opId);
    const branch = await Branch.findById(branchId);

    await operator?.updateOne({ branch: [...operator.branch, branch?.id] });
    await operator?.save();
    res.send(operator);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
