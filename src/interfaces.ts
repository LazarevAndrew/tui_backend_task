interface RepoOwner {
  login: string;
  id: number;
}

export interface UserRepo {
  id: string;
  name: string;
  full_name: string;
  owner: RepoOwner;
  branches_url: string;
  fork: boolean;
}

export interface RepoBranch {
  name: string;
  commit: {
    sha: string;
  };
}

export interface RepoWithBranches {
  repoName: string;
  ownerLogin: string;
  branches: {
    name: string;
    lastCommitSha: string;
  }[];
}
