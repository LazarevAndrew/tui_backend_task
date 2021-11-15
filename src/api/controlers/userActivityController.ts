import { NextFunction, Request, Response } from "express";
import getUserReposWithBranches from "../../services/userActivityService";

export default async function getUserActivity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await getUserReposWithBranches(req.params.username);
    res.send(response);
  } catch (error) {
    next(error);
  }
}
