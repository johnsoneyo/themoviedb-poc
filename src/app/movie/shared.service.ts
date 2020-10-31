import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  likesubject = new Subject<any>();
  searchSubject = new Subject<any>();
  subjectMovies = new Subject<any>();

  sendMessage(message: string) {
    this.likesubject.next( message );
  }

  search(title : string) {
    this.searchSubject.next(title);
  }

  getSearch():Observable<any>{
    return this.searchSubject.asObservable();
  }

  clearMessages() {
    this.likesubject.next();
  }

  getMessage(): Observable<any> {
    return this.likesubject.asObservable();
  }

  getMovies():Observable<any[]>{
    return this.subjectMovies.asObservable();
  }

  sendMovies(movies : any){
    this.subjectMovies.next(movies);
  }

}
