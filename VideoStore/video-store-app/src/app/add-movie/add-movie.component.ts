import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  addMovieData = {}
  constructor(private addmov: DataService, private _router: Router) { }

  ngOnInit() {
  }

  addMovie(){
    this.addmov.addAMovie(this.addMovieData)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/admin-home']);
      },
      err =>{
        console.log(err)
      }
    )
  }

}
