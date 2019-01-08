import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  billboard:any;
  populares: any;
  popularesKids: any;

  constructor( public _movieService : MoviesService) { 

    this._movieService.getMoviesInTheaters()
      .subscribe(data => this.billboard = data);

      this._movieService.getPopularMovies()
      .subscribe(data => this.populares = data);

      this._movieService.getPopularMoviesKids()
      .subscribe(data => this.popularesKids = data);
  }

  ngOnInit() {
  }

}
