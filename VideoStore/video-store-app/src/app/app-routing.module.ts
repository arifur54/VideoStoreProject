import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


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
    path: 'details/:_id',
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
