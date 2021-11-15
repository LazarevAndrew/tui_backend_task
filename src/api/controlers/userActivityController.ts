import { Request, Response } from "express";
import getUserReposWithBranches from "../../services/userActivityService";
import { isApiClientError } from "../../libs/apiClient";
import logger from "../../libs/logger";

export default async function getUserActivity(req: Request, res: Response) {
  try {
    const response = await getUserReposWithBranches(req.params.username);
    res.send(response);
  } catch (error) {
    if (isApiClientError(error)) {
      logger.error({
        status: error.response?.status,
        Message: error.response?.data?.message,
      });
      res.status(error.response?.status || 500).send({
        status: error.response?.status,
        Message: error.response?.data?.message,
      });
    } else {
      logger.error(error);
      res.sendStatus(500);
    }
  }
}
