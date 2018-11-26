import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public _movieService: MoviesService){
    
    this._movieService.searchMovie("man")
      .subscribe(data => console.log(data));
    
  }
}
