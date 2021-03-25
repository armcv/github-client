import { Injectable } from '@angular/core';
import { GithubService } from './github.service';
import { CommitsReposResponse } from "../models/commit";


@Injectable({
  providedIn: 'root'
})

export class CommitsService {
  public method: string;

  constructor(private githubService: GithubService) {
    this.method = 'GET';
  }

  async getCommits(repository: string){
    let client = this.githubService.getInstance();
    let option = `${this.method} /repos/armcv/${repository}/commits`;

    return await client.request(option) as CommitsReposResponse;
  }
}
