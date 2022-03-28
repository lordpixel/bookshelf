import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Book, bookList, BookReduceShape } from './books.fixture';
import { LIST_TYPE } from './books.constants';

export interface ClickEventShape {
  listName: string,
  bookID: string,
}

@Injectable({providedIn: 'root'})
export class BookService {
  // holds the list of books that are not part of the User's Wishlist
  private readonly _books = new BehaviorSubject<Book[]>(bookList.slice(10));

  // holds the list of books that are not part of the User's Wishlist
  private readonly _wishlist = new BehaviorSubject<Book[]>(bookList.slice(0, 10));

  // publishes a readonly version of the list as observable
  readonly books$ = this._books.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  )

  // publishes a readonly version of the list as observable
  readonly wishlist$ = this._wishlist.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  )

  // publish new value for Books list
  set books(val: Book[]) {
    this._books.next(val);
  }

  // getter gets the last value
  get books(): Book[] {
    return this._books.getValue();
  }

  // publish new value for Books list
  set wishlist(val: Book[]) {
    this._wishlist.next(val);
  }

  // getter gets the last value
  get wishlist(): Book[] {
    return this._wishlist.getValue();
  }

  /**
   * Moves a Book from a list to another.
   * 
   * If listName is LIST_TYPE.WISHLIST, the book will be moved from `books` to `wishlist`.
   * If listName isn't LIST_TYPE.WISHLIST, the book will be moved from `wishlist` to `books`.
   * 
   * @param listName The list to add the Book to
   * @param bookID The ID of the Book to move
   */
  addTolist($event: ClickEventShape) {
    const {listName, bookID}: {listName: string, bookID: string} = $event;
    let srcList;

    if (listName === LIST_TYPE.WISHLIST) {
      srcList = this.books;
    } else {
      srcList = this.wishlist;
    }

    const initialReduceInput: BookReduceShape = {
      extractedBook: {
        id: '',
        author: '',
        country: '',
        imageLink: '',
        title: '',
        year: 0
      },
      listWithoutBook: [],
    }

    const result: BookReduceShape = srcList.reduce((accumulator, currentBook) => {
      if (currentBook.id === bookID) {
        accumulator.extractedBook = currentBook;
      } else {
        accumulator.listWithoutBook.push(currentBook);
      }

      return accumulator;
    }, initialReduceInput);

    if (listName === LIST_TYPE.WISHLIST) {
      this.books = result.listWithoutBook;
      this.wishlist.unshift(result.extractedBook);
    } else {
      this.books.unshift(result.extractedBook);
      this.wishlist = result.listWithoutBook;
    }
  }
}