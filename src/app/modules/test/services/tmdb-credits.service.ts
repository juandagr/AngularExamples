import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsService {

  constructor(private http:Http) { 

  }
  getCredits (idMovie) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=ba6ea2be925296a75cefe8a3b8daaba9');
  }
}
