import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { environment } from '../../environments/environment';
import { StatusResponse } from '../models/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: environment.token
    });
  }

  getInstance() {
    return this.octokit;
  }

  async apiStatus() {
      return await this.octokit.request('GET /octocat') as StatusResponse;
  }
}
