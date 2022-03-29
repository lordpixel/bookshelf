import { TestBed } from '@angular/core/testing';

import {BookService} from './books.service';
import {LIST_TYPE} from './books.constants';

describe('BooksService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should start with 90-10 Books distribution among both lists', () => {
    expect(service.books).toHaveSize(90);
    expect(service.wishlist).toHaveSize(10);
  });

  it('should be able to move Books between lists', () => {
    service.addTolist({listName: LIST_TYPE.WISHLIST, bookID: 'B00011'});

    expect(service.books).toHaveSize(89);
    expect(service.wishlist).toHaveSize(11);

    service.addTolist({listName: LIST_TYPE.AVAILABLE, bookID: 'B00011'});
    expect(service.books).toHaveSize(90);
    expect(service.wishlist).toHaveSize(10);
  });
});
