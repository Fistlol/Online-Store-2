import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  type = '';

  constructor() { }

  firstCategory(): any {
    this.type = 'computers';
  }

  secondCategory(): any {
    this.type = 'electronics';
  }

  thirdCategory(): any {
    this.type = 'smart_home';
  }

  fourthCategory(): any {
    this.type = 'pet_supplies';
  }

  getCategory(): any {
    return this.type;
  }
}
