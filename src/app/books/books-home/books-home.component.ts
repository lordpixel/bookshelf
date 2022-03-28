import { Component, OnInit } from '@angular/core';

import { LIST_TYPE } from '../books.constants';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.scss']
})
export class BooksHomeComponent implements OnInit {
  destinationType: string = LIST_TYPE.WISHLIST;

  constructor() { }

  ngOnInit(): void {
  }

}
