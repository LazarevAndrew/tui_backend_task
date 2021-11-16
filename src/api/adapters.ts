import apiClient from "../libs/apiClient";
import { Repo, RepoBranch } from "../interfaces";

export const getUserRepos = (userName: string): Promise<Repo[]> =>
  apiClient.get(`/users/${userName}/repos`);

export const getRepoBranches = (repoFullName: string): Promise<RepoBranch[]> =>
  apiClient.get(`/repos/${repoFullName}/branches`);
