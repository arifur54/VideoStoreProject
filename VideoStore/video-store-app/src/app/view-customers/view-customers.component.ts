import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss']
})
export class ViewCustomersComponent implements OnInit {

  users$ = [];
  public searchInput = "";
  constructor(private custData: CustomerService, private data: DataService, private router: Router) { }

  get getUsers() {
    if (this.searchInput.length > 0) {
      return this.users$.filter(user => (user.FirstName + user.LastName).toLowerCase().includes(this.searchInput.toLowerCase()))
    }
    return this.users$;
  }

  ngOnInit() {
    this.getallData();
  }

  getallData(){
    this.custData.getCustomers().subscribe(
      data => {
       this.users$ = []
       this.users$.push(...data)
       }
      )
   };


   logOut(){
    if(confirm("Are you sure")){
      this.data.logUserIn(false).then((success) => {
        this.router.navigate(['/admin'])
      })
    }
  }

   deleteCustomer(custId){
    if(confirm("Are you Sure you want to delete"))
    this.custData.deleteCustomer(custId).subscribe(
      () => {
      this.getallData();
    })
    return this.users$;
  }
}
