import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  updateMovieData = {}
  constructor(private updateMov: DataService, private _router: Router, private http: HttpClient) { }

  // updateMovie(){
  //   this.updateMov.updateVideo(this.updateMovieData)
  // }

  ngOnInit() {
  }

  updateMovie(updateMovieData){
  
  }

}
