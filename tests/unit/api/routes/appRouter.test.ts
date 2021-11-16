import request from "supertest";
import { OK, NOT_ACCEPTABLE } from "http-status-codes";
import { Response, Request } from "express";

import app from "../../../../src/app";

jest.mock("../../../../src/api/controlers/userActivityController", () => {
  const mockSuccessResponse = async (_: Request, res: Response) => {
    res.status(200).send();
    return Promise.resolve();
  };

  return jest.fn().mockImplementation(mockSuccessResponse);
});

const server = request(app);

describe("get: /github-user-activity/:username", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("[Success]", async () => {
    expect.hasAssertions();
    const response = await server
      .get("/github-user-activity/userName")
      .set("Accept", "application/json");

    expect(response.statusCode).toEqual(OK);
  });
  it("[Failed with invalid headers]", async () => {
    expect.hasAssertions();
    const response = await server
      .get("/github-user-activity/userName")
      .set("Accept", "application/xml");

    expect(response.statusCode).toEqual(NOT_ACCEPTABLE);
  });
});
