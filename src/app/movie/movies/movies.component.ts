import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  imageurl: string;

  movies: [];
  pages: any;
  currentPage: number
  lastPage: number;
  constructor(private movieService: MovieService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {

    this.imageurl = env.image_base_url.concat('/w300');

    this.getData(this.currentPage);

  }

  viewPage(page: number) {
    this.getData(page);
  }


  getData(page: number) {

    this.movieService.getUpcomingMovies(page.toString())
      .subscribe(data => {
        this.movies = data.results;
        console.log(data);
        this.pages = Array(data.total_pages).fill(0).map((x, i) => i + 1);
        this.lastPage = data.total_pages;
        this.currentPage = page;

      });

  }

}
