import { getUserRepos, getRepoBranches } from "../api/adapters";
import { RepoWithBranches } from "../interfaces";

export default async function getUserReposWithBranches(
  userName: string
): Promise<RepoWithBranches[]> {
  const repos = await getUserRepos(userName);
  const requests = repos
    .filter((r) => !r.fork)
    .map(async (repo) => {
      const repoBranches = await getRepoBranches(repo.full_name);
      const result: RepoWithBranches = {
        repoName: repo.name,
        ownerLogin: repo.owner.login,
        branches: repoBranches.map((r) => ({
          name: r.name,
          lastCommitSha: r.commit.sha,
        })),
      };
      return result;
    });
  return Promise.all(requests);
}
