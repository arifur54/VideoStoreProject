import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

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

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.getMovies().subscribe(
    //   data => {
    //     this.movies$.push(...data)
    //     // for (let item of data) {
    //     //   this.movies$.push(item)
    //     // }
    //   }
    //  )
      this.getallData();
      this.fetchData();
    }
    
    getallData(){
      this.data.getMovies().subscribe(
        data => {
          this.movies$.push(...data)
          // for (let item of data) {
          //   this.movies$.push(item)
          // }
        }
       )
    }



    deleteMovie(movId){
      this.data.deleteVideo(movId).subscribe(
        data => {
          this.movies$ 
        }
      ) 
      return this.movies$;
    }

    fetchData(){
      this.data.getMovies().subscribe(
        data =>{
          this.movies$ = data;
        }
      )
    }
}
