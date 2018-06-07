import { Injectable } from '@angular/core';
import { ActorService } from './actor.service';
import { MovieService } from './movie.service';
import { CategoryService } from './category.service';
import { CountryService } from './country.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private items$ = new Subject<any[]>();
  
  private items:any[]= [
    {
      movie: this.movieService.get(0),
      actors: [
        this.actorService.get(0),
        this.actorService.get(1),
      ],
      category: this.categoryService.get(0),
      country: this.country.get(0),
      ranking: 7.8
    },
    {
      movie: this.movieService.get(1),
      actors: [
        this.actorService.get(1),
        this.actorService.get(2),
      ],
      category: this.categoryService.get(1),
      country: this.country.get(1),
      ranking: 8.0
    },
    {
      movie: this.movieService.get(2),
      actors: [
        this.actorService.get(2),
        this.actorService.get(3),
      ],
      category: this.categoryService.get(2),
      country: this.country.get(2),
      ranking: 6.4,
    },
    {
      movie: this.movieService.get(3),
      actors: [
        this.actorService.get(3),
        this.actorService.get(4),
      ],
      category: this.categoryService.get(4),
      country: this.country.get(0),
      ranking: 7.7
    },
    {
      movie: this.movieService.get(4),
      actors: [
        this.actorService.get(4),
      ],
      category: this.categoryService.get(4),
      country: this.country.get(4),
      ranking: 8.1
    }
  ]

  constructor(
    private actorService: ActorService,
    private movieService: MovieService,
    private categoryService: CategoryService,
    private country: CountryService
  ) { }

  getItems() {
    return this.items;
  }

  changeRate(index) {
    this.items[index].ranking=10.0;
    this.items$.next(this.items);
  }

  getItems$(): Observable<any[]> {
    return this.items$.asObservable();
  }

}
