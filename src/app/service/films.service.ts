import { Injectable } from '@angular/core';
import { Films } from '../model/films';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map,catchError  } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  baseUrl = 'https://my-json-server.typicode.com/Luqiii/test-db';
  films: Films[];
  comments: Comment[];


  constructor(private http: HttpClient) { }

  getFilms(): Observable<Films[]> {
    return this.http.get('https://my-json-server.typicode.com/Luqiii/test-db/films').pipe(
      map((res : any[]) => {
        this.films = res;
        return this.films;
    }),
   catchError(this.handleError));
  }

  getComments(filmID:number): Observable<Comment[]> {
    return this.http.get(`${this.baseUrl}/comments?filmID=${filmID}`).pipe(
      map((res : any[]) => {
        this.comments = res;
        return this.comments;
    }),
   catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }

  
}
