import { Endpoints } from "@octokit/types";

export type StatusResponse = Endpoints["GET /"]["response"];
export type ProfileResponse = Endpoints["GET /users/{username}"]["response"];
export type CommitsReposResponse = Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];
export type ReposResponse = Endpoints["GET /users/{username}/repos"]["response"];

export type Profile = ProfileResponse ["data"];
export type Commits = CommitsReposResponse ["data"];
export type Repositories = ReposResponse ["data"];

