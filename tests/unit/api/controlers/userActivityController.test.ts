import { mocked } from "ts-jest/utils";
import { NextFunction, Request, Response } from "express";

import userActivityController from "../../../../src/api/controlers/userActivityController";
import userActivityService from "../../../../src/services/userActivityService";

jest.mock("../../../../src/services/userActivityService");

/* eslint-disable  @typescript-eslint/no-explicit-any */
describe("userActivityController", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  const mockUserName = "mockUserName";
  const mReq = { params: { username: mockUserName } } as any as Request;
  const mRes = {
    status: jest.fn(),
    send: jest.fn(),
  } as any as Response;
  const mNext: NextFunction = jest.fn();

  it("[Succeeded]", async () => {
    const mockService = mocked(userActivityService).mockImplementation(
      async () => []
    );
    await userActivityController(mReq, mRes, mNext);

    expect(mockService).toBeCalledWith(mockUserName);
    expect(mRes.send).toBeCalledWith([]);
  });
  it("[Failed]", async () => {
    mocked(userActivityService).mockImplementation(async () => {
      throw new Error("Service error");
    });
    await userActivityController(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(new Error("Service error"));
  });
});
