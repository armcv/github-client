import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { StatusResponse } from '../models/github';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  endpoint: string = '';
  constructor(private http: HttpClient) {
    this.endpoint = `${environment.backendUrl}/status`;
  }

  apiStatus(): Observable<StatusResponse> {
    return this.http.get<StatusResponse>(this.endpoint).pipe(
      tap((_) => this.log('fetched status')),
      catchError(this.handleError<StatusResponse>('apiStatus'))
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
    console.log(`GithubService: ${message}`);
  }
}
