import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Movies } from './movies';
import {throwError as observableThrowError, Observable} from  'rxjs';
import {catchError} from 'rxjs/operators';





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

  getAMovie(movId){
    return this.http.get('http://localhost:3000/api/getamovie/'+ movId).pipe(
      catchError(this.errorHandler))
  }
  

  addAMovie(newMovie){
    return this.http.post('http://localhost:3000/api/addmovie', newMovie)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  public isLoggedIn: boolean
  get logInStatus () {
    return this.isLoggedIn;
  }
  logUserIn (status) {
    return new Promise((resolve, reject) => {
      this.isLoggedIn = status
      resolve(this.isLoggedIn)
    })
  }

  deleteVideo(vidId){
    return this.http.delete('http://localhost:3000/api/deletemovie/'+vidId).pipe(
      catchError(this.errorHandler)
    );
  }

  updateVideo(Movies) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/updatemovie/' + Movies._id, Movies, {
      headers: {
        "Content-type" : "application/json"
      }
    }).pipe(
      catchError(this.errorHandler)
    );
  }

  updateStatus(Movies){
    return this.http.put('http://localhost:3000/api/reserve/' + Movies._id, Movies).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse){
    // return (error.message || "Server Error");
    return observableThrowError(error.message || "Server Error");
  }
}
