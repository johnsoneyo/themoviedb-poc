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

const appRoutes: Routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  declarations: [HomepageComponent, MoviesComponent, SearchComponent],
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptor,
      multi: true
    }
  ]
})
export class MovieModule { }
