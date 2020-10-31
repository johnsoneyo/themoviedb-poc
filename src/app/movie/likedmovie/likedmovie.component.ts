import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likedmovie',
  templateUrl: './likedmovie.component.html',
  styleUrls: ['./likedmovie.component.scss']
})
export class LikedmovieComponent implements OnInit {

  $movies: any;
  imageurl: string;

  constructor(private sharedService: SharedService,
    private movieService: MovieService,
    private router: Router) { 
      this.$movies = this.router.getCurrentNavigation().extras.state.values;

    }

  ngOnInit(): void {
    this.imageurl = env.image_base_url.concat('/w300');
  }



}
