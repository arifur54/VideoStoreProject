import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movies } from '../movies'

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  
  reserve(mov: Movies){
    console.log(mov.title);
  }
  constructor(private data: DataService) { }
  
  ngOnInit() {
    
  }

}
