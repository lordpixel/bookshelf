import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../books.fixture';
import {ClickEventShape} from '../books.service';
import { LIST_TYPE } from '../books.constants';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Output() public addToList = new EventEmitter<ClickEventShape>();

  @Input() book?:Book;

  @Input() destinationType: string = LIST_TYPE.WISHLIST;

  handleHeartClick() {
    this.addToList.emit({listName: this.destinationType, bookID: this.book?.id!})
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}

