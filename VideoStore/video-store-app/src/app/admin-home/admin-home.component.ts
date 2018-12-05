import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  public movies$ = [];
  public searchInput = "";

  get getMovies() {
    if (this.searchInput.length > 0) {
      return this.movies$.filter(movie => movie.Title.toLowerCase().includes(this.searchInput.toLowerCase()))
    }
    return this.movies$;
  }

  constructor(private data: DataService, private _router: ActivatedRoute) { }

  ngOnInit() {
      this.getallData();
    }
    
  getallData(){
     this.data.getMovies().subscribe(
       data => {
        this.movies$ = []
        this.movies$.push(...data)
          // for (let item of data) {
          //   this.movies$.push(item)
          // }
        }
       )
    };

  deleteMovie(movId){
      this.data.deleteVideo(movId).subscribe(
        () => {
        this.getallData();
      })
      return this.movies$;
    }

}
