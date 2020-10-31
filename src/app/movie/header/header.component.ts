import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favouriteMovies = [];
  likedmovies: number = 0;

  constructor(private sharedService: SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.sharedService.getMessage()
      .subscribe(msg => {
        let movieId = msg.id;
        if (!this.favouriteMovies.map(data => data.id).includes(movieId)) {
          this.process(msg);
        }

      });

  }


  process(msg: any) {
    this.favouriteMovies.push(msg);
    this.sharedService.sendMovies(this.favouriteMovies);
    this.likedmovies = this.favouriteMovies.length;
  }


  viewlikedMovies() {
    console.log('naviga');
    this.router.navigate(['/liked-movies'], {
      state: {
        values: this.favouriteMovies
      }
    });
  }

}
