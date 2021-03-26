import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CommitsReposResponse } from "../models/github";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CommitsService {
  public method: string;

  endpoint: string;
  username: string;
  backendUrl: string;

  constructor(private http: HttpClient) {
    this.method = 'GET';
    this.backendUrl = environment.backendUrl;
    this.username = environment.username;
    this.endpoint = '';
  }

  getCommits(repository: string): Observable<CommitsReposResponse>{
    this.endpoint = `${this.backendUrl}/commits/${this.username}/${repository}`
    return this.http.get<CommitsReposResponse>(this.endpoint)
    .pipe(
      tap(_ => this.log('fetched commits')),
      catchError(this.handleError<CommitsReposResponse>('getCommits'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);

        return of(result as T);
      };
    }

    private log(message: string) {
      console.log(`CommitService: ${message}`);
    }
}
