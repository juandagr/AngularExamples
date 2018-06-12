import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbMovieService {

  constructor(private http:Http) { }

  getMovies () {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ba6ea2be925296a75cefe8a3b8daaba9&language=en-US');
  }
}
