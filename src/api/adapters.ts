import { apiClient } from "./apiClient";
import { UserRepo, RepoBranch } from "../interfaces";

export const getUserRepos = (userName: string): Promise<{data: UserRepo[]}> => apiClient
  .get(`/users/${userName}/repos`);

export const getRepoBranches = (repoFullName: string): Promise<{data: RepoBranch[]}> => apiClient
  .get(`/repos/${repoFullName}/branches`);
