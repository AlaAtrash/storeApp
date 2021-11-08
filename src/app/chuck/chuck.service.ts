import { Injectable } from '@angular/core';
import {Joke} from './joke.model';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {
configUrl = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) { }

  getJokes(): Observable<any> {
    return this.http.get(this.configUrl).pipe();
  }
}
