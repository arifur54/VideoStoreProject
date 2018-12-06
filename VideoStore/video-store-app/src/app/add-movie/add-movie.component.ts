import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  fieldval=false;

  addMovieData = {}
  constructor(private addmov: DataService, private _router: Router) { }

  ngOnInit() {
  }

  //t:HTMLInputElement
  // t.value
  addMovie(){
    console.log()
    this.addmov.addAMovie(this.addMovieData)
    .subscribe(
      res => {
        console.log(res)
        window.alert("Your Movie has been Added")
        this._router.navigate(['/admin-home']);
      },
      err =>{
        console.log(err)
      }
    )
  }

}
