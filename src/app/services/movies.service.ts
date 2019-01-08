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

  movies: any[] = [];

  constructor(private jsonp: Jsonp, 
              private http: Http) { }

  
  getMoviesInTheaters(){
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    let startDateString = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
    let endDateString = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ startDateString }&primary_release_date.lte=${ endDateString }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => res.json().results)
    );  
  }

  getPopularMovies() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=populary.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => res.json().results)
    );
  }

  getPopularMoviesKids() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => res.json().results)
    );

  }

  searchMovie( text: string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ text }&sort_by=populary.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => 
        {
          this.movies = res.json().results;
          console.log(this.movies);
          return res.json().results;
      })
    );
  }

  getMovie( id: string) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(
      map(res => res.json())
    );

  }

}
