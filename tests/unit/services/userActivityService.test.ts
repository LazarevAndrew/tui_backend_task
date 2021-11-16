import { mocked } from "ts-jest/utils";

import { getRepoBranches, getUserRepos } from "../../../src/api/adapters";
import mockRepos from "../../mocks/reposList.json";
import mockRepoBranches from "../../mocks/repoBranches.json";
import userActivityService from "../../../src/services/userActivityService";
import { RepoWithBranches } from "../../../src/interfaces";
import Mock = jest.Mock;

jest.mock("../../../src/libs/apiClient");
jest.mock("../../../src/api/adapters");

/* eslint-disable  @typescript-eslint/no-explicit-any */
describe("userActivityService", () => {
  let mockedGetRepoBranches: Mock;
  afterEach(() => {
    jest.resetAllMocks();
  });
  beforeEach(() => {
    mocked(getUserRepos).mockImplementation(async () => mockRepos as any);
    mockedGetRepoBranches = mocked(getRepoBranches).mockImplementation(
      async () => mockRepoBranches as any
    );
  });

  it("return a proper result", async () => {
    const expectedResult: RepoWithBranches = {
      repoName: "",
      ownerLogin: "",
      branches: [],
    };

    const response = await userActivityService("someName");
    const lengthNotForkedRepos = mockRepos.filter((r: any) => !r.fork).length;

    expect(mockedGetRepoBranches).toHaveBeenCalledTimes(lengthNotForkedRepos);
    expect(response.length).toEqual(lengthNotForkedRepos);
    expect(Object.keys(response[0]).length).toEqual(
      Object.keys(expectedResult).length
    );
  });
});
