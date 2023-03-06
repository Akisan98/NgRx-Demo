import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [BookCollectionComponent, BookListComponent],
  imports: [
    CommonModule
  ],
  exports: [BookCollectionComponent, BookListComponent],
})
export class BooksModule { }
