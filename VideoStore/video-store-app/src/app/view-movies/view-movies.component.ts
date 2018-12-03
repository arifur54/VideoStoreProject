import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss'],
  providers: [DataService]
})
export class ViewMoviesComponent implements OnInit {

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
    // this.data.getMovies().toPromise().then((res) => {
    //   // console.log(res.movies)
    //   this.movies$.push(...res.movies)
    // }).catch((err)=>{
    //   console.log(err)
    // })

    this.data.getMovies().subscribe(
      data => {
        this.movies$ = data
        // this.movies$.push(...data)
        // for (let item of data) {
        //   this.movies$.push(item)
        // }
      }
     )
  }




}
