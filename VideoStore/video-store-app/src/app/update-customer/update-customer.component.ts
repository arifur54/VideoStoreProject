import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  private updateCustomerData = {};
  private  id: String;
  constructor(private custData: CustomerService, private router: Router, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.getCustData();
  }

  getCustData(){
    this.id = this._router.snapshot.paramMap.get('id');
    this.custData.getACustomer(this.id).subscribe(
      custData =>{
        this.updateCustomerData = custData;
        console.log(this.custData);
      }
    )
  }

  updateCustomer(){
    this.custData.updateCustomer(this.updateCustomerData).subscribe(
      res => {
        console.log(res)
      },
      err =>{
        console.log(err)
        window.alert("your movie has been Updated!")
        this.router.navigate(['/view-customers'])
      }
    )
  }
}

