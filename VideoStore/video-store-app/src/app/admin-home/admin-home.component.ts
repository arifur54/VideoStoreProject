import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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

  constructor(private data: DataService, private _router: ActivatedRoute, private router: Router) { }

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

  logOut(){
    if(confirm("Are you sure")){
      this.data.logUserIn(false).then((success) => {
        this.router.navigate(['/admin'])
      })
    }
  }

  deleteMovie(movId){
    if(confirm("Are you Sure you want to delete"))
      this.data.deleteVideo(movId).subscribe(
        () => {
        this.getallData();
      })
      return this.movies$;
    }

}
