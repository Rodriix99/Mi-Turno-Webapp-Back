import { Request, Response } from "express";
import User from "../models/Users";

export const createOperator = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, dni, usertype } = req.body;
    const newOperator = new User({ fullName, email, password, dni, usertype });
    await newOperator.save();
    res.send(newOperator);
  } catch (err) {
    console.log(err);
    res.send(401);
  }
};
