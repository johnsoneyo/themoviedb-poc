import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private sharedService : SharedService) { 

  }

  ngOnInit(): void {
  }

  searchMovie(value){
     this.sharedService.search(value);
  }

}
