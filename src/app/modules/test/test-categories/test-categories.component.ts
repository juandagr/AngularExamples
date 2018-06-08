import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-test-categories',
  templateUrl: './test-categories.component.html',
  styleUrls: ['./test-categories.component.scss']
})
export class TestCategoriesComponent implements OnInit {

  categories:any[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getItems();
  }

}
