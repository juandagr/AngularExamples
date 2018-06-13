import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Response } from '@angular/http'; 

@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsService {

  constructor(private http:HttpClient) { 

  }
  getCredits (idMovie) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=ba6ea2be925296a75cefe8a3b8daaba9')
    .pipe(
      map(
        (data: any) => {
          return data.cast.map((item)=>{
            return {
              id: item.id,
              name: item.name,
              character: item.character,
              profile_path: item.profile_path
            }
          });
        }
      ));
  }
}
