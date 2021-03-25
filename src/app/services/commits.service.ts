import { Injectable } from '@angular/core';
import { GithubService } from './github.service';
import { CommitsReposResponse } from "../models/commit";


@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  public method: string;
  public endpoint: string;

  constructor(private githubService: GithubService) {
    this.endpoint = '/repos/armcv/apostrophe-passport/commits';
    this.method = 'GET';
  }

  async getCommits(){
    let client = this.githubService.getInstance();
    let option = `${this.method} ${this.endpoint}`;

    return await client.request(option) as CommitsReposResponse;
  }
}
