import User from "../models/Users";
import { Request, Response } from "express";
import { generateToken } from "../config/token";
import { info } from "../config/token";
import { validateToken } from "../config/token";
import { IBranch } from "../models/Branch";

export const register = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { fullName, email, password, dni, usertype } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.sendStatus(400);
    const newUser = new User({
      fullName,
      email,
      password,
      dni,
      usertype,
    });
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log(err);
    res.send(401);
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
      booking: user.booking,
      branch: user.branch,
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
    const { user }: any = validateToken(token);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(401);
  }
};

export const findAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (err) {
    console.log(err);
    res.send(401);
  }
};

export const findOneUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findUser = await User.findById(id);
    res.send(findUser);
  } catch (err) {
    console.log(err);
    res.send(401);
  }
};
