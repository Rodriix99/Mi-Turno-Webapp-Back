import jwt from "jsonwebtoken";
import config from "./envs";
import { IBranch } from "../models/Branch";
import { IBooking } from "../models/Booking";

export interface info {
  fullName: string;
  email: string;
  dni: number;
  usertype: string;
  branch?: any;
  booking?: Array<IBooking>;
}

export const generateToken = (payload: info) => {
  const token = jwt.sign({ user: payload }, config.jwtSecret);
  return token;
};

export const validateToken = (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};
