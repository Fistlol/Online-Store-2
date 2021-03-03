import {Component, OnInit} from '@angular/core';

import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  type = '';

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
  }

  firstCategory(): any {
    this.categoryService.firstCategory();
  }

  secondCategory(): any {
    this.categoryService.secondCategory();
  }

  thirdCategory(): any {
    this.categoryService.thirdCategory();
  }

  fourthCategory(): any {
    this.categoryService.fourthCategory();
  }
}
