import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminUserData = {}
  constructor(private adminData: DataService, private router: Router) { }

  ngOnInit() {
  }

  logInAdmin(){
    this.adminData.adminLogin(this.adminUserData)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/admin-home'])
      },
      err => {
        console.log(err)
      }
    )
  }

 

}
