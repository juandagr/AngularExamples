import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private items$ = new Subject<any[]>();

  private items:any[]= [
    {
      id: 1,
      name: 'Johnny Depp',
      nationality: "USA",
      birthday: new Date(1986, 5,3)
    },
    {
      id: 1,
      name: 'Angelina Jolie',
      nationality: "USA",
      birthday: new Date(1982, 2,2)
    },
    {
      id: 1,
      name: 'Sylvester Stallone',
      nationality: "USA",
      birthday: new Date(1967, 1,22)
    },
    {
      id: 1,
      name: 'Antonio Sanint',
      nationality: "Colombia",
      birthday: new Date(1975, 7,14)
    },
    {
      id: 1,
      name: 'Carolina Gómez',
      nationality: "American",
      birthday: new Date(1989, 3,19)
    },
    
    
    
    
  ]

  constructor() { }

  getItems() {
    return this.items;
  }

  get(index) {
    return this.items[index];
  }

  addItem(item) {
    this.items.push(item);
    this.items$.next(this.items);
  }

  getItems$(): Observable<any[]> {
    return this.items$.asObservable();
  }
}
