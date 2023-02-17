import jwt from "jsonwebtoken";
import config from "./envs";

interface info {
  name: string;
  lastname: string;
  email: string;
  dni: number;
  usertype: string;
}

export const generateToken = (payload: info) => {
  const token = jwt.sign({ user: payload }, config.jwtSecret);
  return token;
};

export const validateToken = (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};
