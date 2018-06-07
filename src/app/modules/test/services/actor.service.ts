import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private items$ = new Subject<any[]>();

  private items:string[]= [
    'Johnny Depp',
    'Angelina Jolie',
    'Sylvester Stallone',
    'Antonio Sanint',
    'Carolina Gómez'
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
