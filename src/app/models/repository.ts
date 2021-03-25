import { Endpoints, GetResponseDataTypeFromEndpointMethod, GetResponseTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export type ReposResponse = Endpoints["GET /users/{username}/repos"]["response"];
export type Repositories = ReposResponse ["data"];
export type Repository = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.get>;
