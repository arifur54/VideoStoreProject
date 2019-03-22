import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageErrorComponent } from './page-error/page-error.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ViewMoviesComponent,
    AdminLoginComponent,
    ViewDetailsComponent,
    AdminHomeComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    ViewCustomersComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    AboutUsComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
