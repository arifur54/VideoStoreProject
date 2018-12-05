import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  username = ""
  password = ""
  constructor(private adminData: DataService, private router: Router) { }

  ngOnInit() {
  }

  logInAdmin(){
    this.adminData.adminLogin(this.username, this.password)
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
