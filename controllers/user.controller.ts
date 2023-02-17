import User from "../models/Users";
import { Request, Response } from "express";
import { generateToken } from "../config/token";
import { info } from "../config/token";
import { validateToken } from "../config/token";

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, dni, usertype } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.sendStatus(400);
    const newUser = new User({ fullName, email, password, dni, usertype });
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log(err);
    res.send(400);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(400);
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.sendStatus(400);

    const payload: info = {
      fullName: user.fullName,
      email: user.email,
      dni: user.dni,
      usertype: user.usertype,
      branch: user.branch,
      booking: user.booking,
    };
    const token = generateToken(payload);
    res.send([payload, token]);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

export const me = (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    if (!token) return res.sendStatus(400);
    const user = validateToken(token);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(401);
  }
};
