import { Component, OnInit } from '@angular/core';
import { TmdbMovieService } from '../services/tmdb-movie.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-test-tmdb-movies',
  templateUrl: './test-tmdb-movies.component.html',
  styleUrls: ['./test-tmdb-movies.component.scss']
})
export class TestTmdbMoviesComponent implements OnInit {

  public movies;

  constructor(private tmdbMoviesService: TmdbMovieService) { }

  ngOnInit() {
    this.tmdbMoviesService.getMovies().subscribe(
      (data: Response ) =>{
        console.log(data.json());

        const movies =data.json();
        this.movies = movies.results;
      },
      (error: Response) => {
        console.log(error.json())
      }
    )
  }

}
