import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private aAroute: ActivatedRoute) { }

  ngOnInit() {
  }

  public goToAdmin() {
    if (this.data.isLoggedIn) {
      this.router.navigate(['/admin-home'])
    } else {
      this.router.navigate(['/admin'])
    }
  }

}
