import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

  plusLike(): void {
    this.product.likes++;
  }

}
