import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { SharedService } from 'src/app/movie/shared.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {

  $movie: Observable<any>;
  $imageurl: Observable<any>;

  imageurl : string;
  liked : boolean = false;
  unliked: boolean = true;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.imageurl = env.image_base_url.concat('/w92');
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetail(parseInt(movieId)).subscribe(data => {
       this.$movie = new Observable(observable => {
            observable.next(data);
            this.$imageurl = new Observable(observable => {
               observable.next( env.image_base_url.concat('/w500').concat(data.poster_path));
            });
          
       });
    })

    this.sharedService.getMovies().subscribe(data => {
        if(data.has(parseInt(movieId))){
          this.liked = true;
          this.unliked = false;
        }
    });
  }

  likeMovie(data : any ){
      this.sharedService.sendMessage(data.id);
  }

  unlikeMovie(data : any ){
    this.sharedService.sendMessage(data.id);
}

}
