import { Injectable } from '@angular/core';
import { GithubService } from './github.service';
import { ReposResponse } from "../models/repository";

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  public method: string;
  public endpoint: string;

  constructor(private githubService: GithubService) {
    this.endpoint = '/users/armcv/repos';
    this.method = 'GET';
  }

  async getRepos(){
    let client = this.githubService.getInstance();
    let option = `${this.method} ${this.endpoint}`;

    return await client.request(option) as ReposResponse;
  }
}
