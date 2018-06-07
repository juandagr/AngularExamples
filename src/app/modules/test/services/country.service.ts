import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private items:string[]= [
    'USA',
    'España',
    'Colombia',
    'Francia',
    'Argentina'
  ]

  constructor() { }

  getItems() {
    return this.items;
  }

  get(index) {
    return this.items[index];
  }
}
