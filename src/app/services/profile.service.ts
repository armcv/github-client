import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private octokit: Octokit;
  public endpoint: string;
  public method: string;

  constructor() {
    this.octokit = new Octokit();
    this.method = 'GET';
    this.endpoint = '/users/';
  }

  async getProfile(username: string){
    let option = `${this.method} ${this.endpoint}${username}`;
    let data = await this.octokit.request(option);

    return data;
  }
}
