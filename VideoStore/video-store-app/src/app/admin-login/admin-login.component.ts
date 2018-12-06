import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminUser } from '../adminuser';
import { resolve } from 'url';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  userData = {};
  // admin: AdminUser[];

  username = ""
  password = ""
  errorMessage:String;
  constructor(private data: DataService, private adminData: AdminService, private router: Router) { }

  ngOnInit() {
    this.getUserData()
  }

  public getUserData(): any{
    return this.adminData.adminLogin(this.username,this.password).toPromise()
  }

  logInAdmin(usr, pass){
    if(usr === "" || pass == "") {
      this.errorMessage = "Username or Password Cannot be empty!"
      return;
    }
    this.getUserData().then((res) => {
      let adminData = res
      for (const data of adminData) {
        if (data.password == pass && data.user_name == usr) {
          this.data.logUserIn(true).then((success) => {
            this.router.navigate(['/admin-home'])
          }).catch(error => { 
            console.log(error)
          })
        } else {
          this.errorMessage = "Username or Password is incorrect. Use username<admin>&& password<admin123>||password<admin1234>";
        }
      }
    }).catch((err) => {
      console.log(err)
    })
        
  }

 

}
