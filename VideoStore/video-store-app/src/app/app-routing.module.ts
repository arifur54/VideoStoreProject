import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/videohome',
    pathMatch: 'full'
  },
  {
    path:'videohome',
    component: ViewMoviesComponent
  },
  {
    path:'admin',
    component:AdminLoginComponent
  },
  {
    path: 'details/:id',
    component: ViewDetailsComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
  {
    path: 'add-movie',
    component: AddMovieComponent
  },
  {
    path: 'delete/:id',
    component: AdminHomeComponent
  },
  {
    path: 'update/:id',
    component: UpdateMovieComponent
  },
  {
    path: 'view-customers',
    component: ViewCustomersComponent
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent
  },
  {
    path: 'updatecustomer/:id',
    component: UpdateCustomerComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
