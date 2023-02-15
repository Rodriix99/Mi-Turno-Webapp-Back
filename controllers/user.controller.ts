import User from "../models/Users";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const { name, lastname, email, password, dni, usertype } = req.body;

  const newUser = new User({ name, lastname, email, password, dni, usertype });

  await newUser.save();

  res.send(newUser);
};
