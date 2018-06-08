import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-test-countries',
  templateUrl: './test-countries.component.html',
  styleUrls: ['./test-countries.component.scss']
})
export class TestCountriesComponent implements OnInit {

  countries:any[];

  constructor(private countryService:CountryService) { }

  ngOnInit() {
    this.countries = this.countryService.getItems();
  }

}
