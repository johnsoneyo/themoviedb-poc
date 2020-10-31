import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { environment as env } from '../../../environments/environment';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  imageurl: string;
  pagesconfig = new Map<number, any>();

  movies: [];
  pages: any;
  currentPage: number
  lastPage: number;
  showProgress: boolean;
  search: boolean = false;
  query: string;

  constructor(private movieService: MovieService, private sharedService: SharedService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {

    this.imageurl = env.image_base_url.concat('/w300');
    this.getData(this.currentPage);

    this.sharedService.getSearch().subscribe(query => {
      this.searchMovie(query, '1');
    });

  }

  viewPage(page: number) {
    this.showProgress = true;
    setTimeout(() => {
    }, 3000);
    this.getData(page);
  }


  getData(page: number) {
    if (this.search === true) {
      this.searchMovie(this.query, page.toString());
      return;
    }

    this.movieService.getUpcomingMovies(page.toString())
      .subscribe(data => {
        this.movies = data.results;
        this.pages = Array(data.total_pages).fill(0).map((x, i) => i + 1);
        this.lastPage = data.total_pages;
        this.currentPage = page;
        this.showProgress = false;
      });

  }

  pageLimit(page: number): boolean {
    return page < 12;
  }

  searchMovie(query: string, page: string) {
    this.movieService.searchMovie(query, page.toString())
      .subscribe(data => {
        this.movies = data.results;
        this.pages = Array(data.total_pages).fill(0).map((x, i) => i + 1).filter(g => g < 20);
        this.lastPage = data.total_pages;
        this.currentPage = data.page;
        this.showProgress = false;
        this.search = true;
        this.query = query;
      });

  }

}
