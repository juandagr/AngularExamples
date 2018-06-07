import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private items:string[]= [
    'The expendables',
    'Wanted',
    'Alicia in wonderland',
    'Deadpool',
    'The Conjuring'
  ]

  constructor() { }

  getItems() {
    return this.items;
  }

  get(index) {
    return this.items[index];
  }
}
