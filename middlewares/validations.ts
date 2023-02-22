import { Request, Response, NextFunction } from "express";
import { validateToken } from "../config/token";

export const validateAdminAndOp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);
  const { user }: any = validateToken(token);
  if (!user) return res.sendStatus(401);
  if (user.usertype === "user") return res.sendStatus(401);
  next();
};

export const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);
  const { user }: any = validateToken(token);
  if (!user) return res.sendStatus(401);
  if (user.usertype === "user" || user.usertype === "operator")
    return res.sendStatus(401);
  next();
};
