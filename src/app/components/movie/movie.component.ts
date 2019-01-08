import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any;
  backTo: string = "";
  criteria: string = "";

  constructor(public _movieService: MoviesService, 
              public route: ActivatedRoute) { 

                this.route.params.subscribe(parameters => {
                    this.backTo = parameters['page'];
                    this.criteria = parameters["criteria"] ? parameters["criteria"] : "";

                    this._movieService.getMovie(parameters['id'])
                        .subscribe(data => {
                          this.movie = data;
                        });
                });    

              }

  ngOnInit() {
  }

}
