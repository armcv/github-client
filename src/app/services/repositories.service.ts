import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ReposResponse } from '../models/github';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  public endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.backendUrl}/repos/${environment.username}`;
  }

  getRepos(): Observable<ReposResponse>{
    return this.http.get<ReposResponse>(this.endpoint)
    .pipe(
      tap(_ => this.log('fetched repos')),
      catchError(this.handleError<ReposResponse>('getRepos'))
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
    console.log(`RepositoriesService: ${message}`);
  }
}
