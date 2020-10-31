import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  likesubject = new Subject<any>();
  unlikesubject = new Subject<any>();
  subjectMovies = new Subject<Set<number>>();

  sendMessage(message: string) {
    this.likesubject.next({ text: message });
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

  getMovies():Observable<Set<number>>{
    return this.subjectMovies.asObservable();
  }

  sendMovies(movies : Set<number>){
    this.subjectMovies.next(movies);
  }

}
