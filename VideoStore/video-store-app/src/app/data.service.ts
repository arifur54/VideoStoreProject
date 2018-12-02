import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movies } from './movies';
import {throwError as observableThrowError, Observable, from} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Dependecy injection
  constructor(private http: HttpClient) {
   }



  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:3000/api/getmovies')
    .pipe(
      catchError(this.errorHandler));
  }
  

  addAMovie(newMovie){
    return this.http.post('http://localhost:3000/api/addmovie', newMovie)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  adminLogin(user){
    return this.http.post<any>('http://localhost:3000/admin/getuser', user).pipe(
      catchError(this.errorHandler)
    );
  }

  

  


  errorHandler(error: HttpErrorResponse){
    // return (error.message || "Server Error");
    return observableThrowError(error.message || "Server Error");
  }
}
