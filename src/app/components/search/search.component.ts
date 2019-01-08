import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search: string = "";
  movies: any[];
  constructor(public _movieService: MoviesService,
              public route: ActivatedRoute) { 

                this.route.params.subscribe(parameters => {
                  if(parameters["criteria"]){
                    this.search = parameters["criteria"];
                    this.searchMovie();
                  }
                });
              }

  ngOnInit() {
  }

  searchMovie(){
      if(this.search.length == 0){
        return;
      }

      this._movieService.searchMovie(this.search)
          .subscribe(data => this.movies = data);
  }

}
