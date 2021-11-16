import { NextFunction, Request, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";
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
      const status: number = error.response?.status || INTERNAL_SERVER_ERROR;
      const message: string =
        error.response?.data?.message || "Something went wrong";

      logger.error(
        `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
      );
      res.status(status).send({ status, Message: message });
    } else {
      logger.error(error);
      res.sendStatus(INTERNAL_SERVER_ERROR).json(error);
    }
  } catch (err) {
    next(err);
  }
};

export default errorMiddleware;
