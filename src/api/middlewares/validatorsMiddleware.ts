import { NextFunction, Request, Response } from "express";

export default async function typeValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contype = req.headers.accept;
  if (!contype || !!contype.indexOf("application/json"))
    return res.status(406).send({ status: 406, Message: "Not Acceptable" });
  return next();
}
