import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ProfileResponse } from '../models/github';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  endpoint: string;
  username: string;
  backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
    this.username = environment.username;
    this.endpoint = `${this.backendUrl}/profile/${this.username}`;
  }

  getProfile(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(this.endpoint)
    .pipe(
      tap(_ => this.log('fetched profile')),
      catchError(this.handleError<ProfileResponse>('getProfile'))
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
    console.log(`ProfileService: ${message}`);
  }
}
