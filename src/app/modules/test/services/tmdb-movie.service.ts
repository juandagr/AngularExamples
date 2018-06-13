import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Response } from '@angular/http'; 


@Injectable({
  providedIn: 'root'
})
export class TmdbMovieService {

  constructor(private http:HttpClient) { }

  getMovies () {
    return this.http
    .get('https://api.themoviedb.org/3/movie/top_rated?api_key=ba6ea2be925296a75cefe8a3b8daaba9&language=en-US')
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item)=>{
              return {
                id: item.id,
                title: item.title
              }
            });
          }
        ));
  }
}
