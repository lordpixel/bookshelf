import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksWishlistComponent } from './books-wishlist/books-wishlist.component';
import { BooksHomeComponent } from './books-home/books-home.component';

const routes: Routes = [
  {
    path: '',
    component: BooksHomeComponent
  },
  {
    path: 'wishlist',
    component: BooksWishlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
