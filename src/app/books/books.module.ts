import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BooksHomeComponent } from './books-home/books-home.component';
import { BooksWishlistComponent } from './books-wishlist/books-wishlist.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BooksHomeComponent,
    BooksWishlistComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
})
export class BooksModule { }
