import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movies } from '../movies'
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  private movies$ = {};
  private customer$ = {};
  private id: String;
  
  
  constructor(private data: DataService, private customer:CustomerService, private router: ActivatedRoute, private _router: Router) { }
  
  ngOnInit() {
    this.getMovieData();
    this.getCustomerData();
    
  }
  getMovieData() : void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.data.getAMovie(this.id).subscribe(
      data => {
        this.movies$ = data
        console.log(this.movies$)
      }
    )
  }

  getCustomerData(): void {
    this.customer.getCustomers().subscribe(
      customer => {
        this.customer$ = customer;
      }
    )

  }

  status(movID):void{
    console.log(movID)
    this.data.updateStatus(this.movies$).subscribe(
      res =>{
        console.log(res)
        //this._router.navigate(['/videohome'])
      },
      err => {
        console.log(err)
        window.alert("Your Movie has been reserved")
        this._router.navigate(['/videohome'])
      }
    )
  }



}
