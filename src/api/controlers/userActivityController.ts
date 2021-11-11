import { Request, Response } from "express"
import {getUserReposWithBranches} from "../../services/userActivityService";

export async function getUserActivity(req: Request, res: Response) {
  try {
    const response = await getUserReposWithBranches(req.params.username);
    res.send(response);
  } catch (error: any) {
    res.status(error.response?.status)
      .send({ status: error.response?.status, Message: error.response?.data?.message });
  }
}
