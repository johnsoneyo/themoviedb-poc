import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  likesubject = new Subject<any>();
  unlikesubject = new Subject<any>();
  subjectMovies = new Subject<any>();

  sendMessage(message: string) {
    this.likesubject.next( message );
  }

  sendUnlikeMessage(message: string) {
    this.unlikesubject.next({ text: message });
  }

  clearMessages() {
    this.likesubject.next();
  }

  getMessage(): Observable<any> {
    return this.likesubject.asObservable();
  }

  getunlikeMessage(): Observable<any> {
    return this.unlikesubject.asObservable();
  }

  getMovies():Observable<any[]>{
    return this.subjectMovies.asObservable();
  }

  sendMovies(movies : any){
    this.subjectMovies.next(movies);
  }

}
