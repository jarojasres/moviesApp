import { Injectable } from '@angular/core';
import {Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "b9623c5efd385b4d724109978e734e4e";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  private urlImage = 'https://image.tmdb.org/t/p/w300';

  constructor(private jsonp: Jsonp, 
              private http: Http) { }


  getPopularMovies() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=populary.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => res.json())
    );
  }

  searchMovie( text: string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ text }&sort_by=populary.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => res.json())
    );
  }
}
