import { Component, Input, OnInit } from '@angular/core';

import { BookService } from '../books.service';
import { LIST_TYPE } from '../books.constants';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input()
  destinationType: string = LIST_TYPE.WISHLIST;

  constructor(public state: BookService) {} 

  ngOnInit(): void {
  }

}
