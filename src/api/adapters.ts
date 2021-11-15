import apiClient from "../libs/apiClient";
import { UserRepo, RepoBranch } from "../interfaces";

export const getUserRepos = (userName: string): Promise<UserRepo[]> =>
  apiClient.get(`/users/${userName}/repos`);

export const getRepoBranches = (repoFullName: string): Promise<RepoBranch[]> =>
  apiClient.get(`/repos/${repoFullName}/branches`);
