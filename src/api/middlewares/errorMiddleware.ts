import { NextFunction, Request, Response } from "express";
import logger from "../../libs/logger";
import { isApiClientError } from "../../libs/apiClient";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (isApiClientError(error)) {
      const status: number = error.response?.status || 500;
      const message: string =
        error.response?.data?.message || "Something went wrong";

      logger.error(
        `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
      );
      res.status(status).send({ status, Message: message });
    } else {
      logger.error(error);
      res.sendStatus(500).json(error);
    }
  } catch (err) {
    next(err);
  }
};

export default errorMiddleware;
