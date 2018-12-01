import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {  ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path:'',
    component: ViewMoviesComponent
  },
  {
    path:'admin',
    component:AdminLoginComponent
  },
  {
    path: 'details/:title',
    component: ViewDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
