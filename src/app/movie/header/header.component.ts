import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favouriteMovies = new Set<number>();
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getMessage()
      .subscribe(msg => {
        this.favouriteMovies.add(msg.text);
        this.sharedService.sendMovies(this.favouriteMovies);
      });

  }

}
