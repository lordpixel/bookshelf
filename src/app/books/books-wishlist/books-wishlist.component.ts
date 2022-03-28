import { Component, OnInit } from '@angular/core';

import { LIST_TYPE } from '../books.constants';

@Component({
  selector: 'app-books-wishlist',
  templateUrl: './books-wishlist.component.html',
  styleUrls: ['./books-wishlist.component.scss']
})
export class BooksWishlistComponent implements OnInit {
  destinationType: string = LIST_TYPE.AVAILABLE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
