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

  private globalMovies = new BehaviorSubject<Object>([])

  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:3000/api/getmovies');
    // .pipe(
    //   catchError(this.errorHandler));
  }
  

  addAMovie(newMovie){
    return this.http.post('http://localhost:3000/api/addmovie', newMovie);
  }

  

  


  errorHandler(error: HttpErrorResponse){
    // return (error.message || "Server Error");
    return observableThrowError(error.message || "Server Error");
  }
}
