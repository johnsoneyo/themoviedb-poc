import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getUpcomingMovies(pageNo: string): Observable<any> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', pageNo);
    return this.http.get(env.movies_base_url.concat('/movie/upcoming'), { params }).pipe(map((data) => data));
  }

  getMovieDetail(movieId : number): Observable<any>{
    const params = new HttpParams()
      .set('language', 'en-US');
      return this.http.get(env.movies_base_url.concat('/movie/'+movieId), { params }).pipe(map((data) => data));
  }

  searchMovie(title : string,page : string):Observable<any>{
    const params = new HttpParams()
    .set('query', title)
    .set('page',page)
    .set('language', 'en-US');
    return this.http.get(env.movies_base_url.concat('/search/movie'),{params}).pipe(map((data) => data))
  }


}
