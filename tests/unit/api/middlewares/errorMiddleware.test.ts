import request from "supertest";
import { mocked } from "ts-jest/utils";
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from "http-status-codes";

import app from "../../../../src/app";
import logger from "../../../../src/libs/logger";
import userActivityController from "../../../../src/api/controlers/userActivityController";

const server = request(app);

jest.mock("../../../../src/libs/logger");

jest.mock("../../../../src/api/controlers/userActivityController");

describe("errorMiddleware", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("[Returns proper error]", async () => {
    const mockMessage = "Mock error mesage";
    const mockStatus = NOT_FOUND;
    const mockApiClientError = {
      isAxiosError: true,
      method: "get",
      path: "some_path",
      response: {
        data: {
          message: mockMessage,
        },
        status: mockStatus,
      },
    };
    mocked(userActivityController).mockImplementation(async () => {
      throw mockApiClientError;
    });
    const response = await server
      .get("/github-user-activity/userName")
      .set("Accept", "application/json");

    expect(response.status).toEqual(mockStatus);
    expect(response.body.Message).toEqual(mockMessage);
    expect(logger.error).toHaveBeenCalledTimes(1);
  });
  it("[Returns 500 error]", async () => {
    mocked(userActivityController).mockImplementation(async () => {
      throw new Error("Worng formatted error");
    });
    const response = await server
      .get("/github-user-activity/userName")
      .set("Accept", "application/json");

    expect(response.status).toEqual(INTERNAL_SERVER_ERROR);
    expect(logger.error).toHaveBeenCalledTimes(1);
  });
});
