import {Component, OnInit} from '@angular/core';

import {products} from '../products';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  products = products;
  typeOf = '';
  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.typeOf = this.categoryService.getCategory();
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

}
