import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AdminUser } from './adminuser';
import {throwError as observableThrowError, Observable} from  'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  adminLogin(username: String, password: String){
    var admin = {
      user_name: username,
      password: password
    }
    var head = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post<AdminUser[]>('http://localhost:3000/admin/getuser', admin, head);
  }
}
