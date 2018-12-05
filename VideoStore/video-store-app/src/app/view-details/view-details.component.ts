import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movies } from '../movies'
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  private movies$ = {};
  private id: String;
  
  
  constructor(private data: DataService, private router: ActivatedRoute, private _router: Router) { }
  
  ngOnInit() {
    this.getData();
    
  }
  getData() : void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.data.getAMovie(this.id).subscribe(
      data => {
        this.movies$ = data
        console.log(this.movies$)
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
        this._router.navigate(['/videohome'])
      }
    )
  }



}
