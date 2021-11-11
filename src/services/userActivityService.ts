import { getUserRepos, getRepoBranches } from "../adapters";
import { RepoWithBranches } from "../interfaces";

export async function getUserReposWithBranches(userName: string): Promise<RepoWithBranches[]> {
  const { data: repos } = await getUserRepos(userName);
  const requests = repos.filter(r => !r.fork).map(
    async (repo) => {
      const { data: repoBranches } = await getRepoBranches(repo.full_name);
      const result: RepoWithBranches = {
        repoName: repo.name,
        ownerLogin: repo.owner.login,
        branches: repoBranches.map(r => ({
          name: r.name,
          lastCommitSha: r.commit.sha
        }))
      };
      return result;
    }
  );
  return await Promise.all(requests);
}
