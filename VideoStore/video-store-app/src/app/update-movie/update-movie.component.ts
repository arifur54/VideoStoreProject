import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movies } from '../movies';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  private updateMovieData = {};
  private  id: String;
  
  constructor(private data: DataService, private _router: ActivatedRoute, private router: Router) { }

  // updateMovie(){
  //   this.updateMov.updateVideo(this.updateMovieData)
  // }

  ngOnInit() {
    this.getMovieData()
  }

  getMovieData(){
    this.id = this._router.snapshot.paramMap.get('id');
    this.data.getAMovie(this.id).subscribe(
      data =>{
        this.updateMovieData = data;
        console.log(this.updateMovieData)
      }
    )
  }

  updateMovie(){
    this.data.updateVideo(this.updateMovieData).subscribe(
      res => {
        console.log(res)
      },
      err =>{
        console.log(err)
        window.alert("your movie has been Updated!")
        this.router.navigate(['/admin-home'])
      }
    )
  }

}
