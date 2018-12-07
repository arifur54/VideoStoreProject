import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {throwError as observableThrowError, Observable} from  'rxjs';
import { Customer } from './customer';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:3000/api/getcustomers');
  }

  addCustomer(newCustomer){
    return this.http.post('http://localhost:3000/api/addcustomer', newCustomer);
  }
  
  deleteCustomer(cusId){
    return this.http.delete('http://localhost:3000/api/deletecustomer/'+cusId);
  }

  getACustomer(custId){
    return this.http.get('http://localhost:3000/api/getacustomer/'+ custId)
  }

  updateCustomer(Customer) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application.json');
    return this.http.put('http://localhost:3000/api/updatecustomer/' + Customer._id, Customer,{headers:headers});
  }

}
