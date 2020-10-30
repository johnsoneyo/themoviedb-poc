
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
