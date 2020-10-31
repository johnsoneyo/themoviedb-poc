import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../movies/homepage/homepage.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MoviesComponent } from './movies/movies.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApikeyInterceptor } from '../apikey.interceptor';
import { SearchComponent } from './search/search.component';
import { MoviedetailComponent } from '../movies/moviedetail/moviedetail.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
 

const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'detail/:id', component: MoviedetailComponent }
];

@NgModule({
  declarations: [HomepageComponent, MoviesComponent, SearchComponent, MoviedetailComponent],
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule
    
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptor,
      multi: true
    }
  ]
})
export class MovieModule { }
