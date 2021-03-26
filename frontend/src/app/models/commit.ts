import { Endpoints, GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export type CommitsReposResponse = Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];
export type Commits = CommitsReposResponse ["data"];
export type Commit = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getCommit>;
