import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  addCustData = {}
  constructor(private addCust: CustomerService, private route: Router) { }

  ngOnInit() {
  }

  addCustomer(){
    this.addCust.addCustomer(this.addCustData).subscribe(
      res =>{
        console.log(res);
        window.alert('Customer Added')
        this.route.navigate(['/view-customers'])
      },
      err => {
        console.log(err);
      }
    )
  }
}
