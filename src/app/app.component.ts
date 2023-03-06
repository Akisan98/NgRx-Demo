import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './books/state/books.selectors';
import { BooksActions, BooksApiActions } from './books/state/books.actions';
import { GoogleBooksService } from './books/book-list/services/books.service';
import { Book } from './books/book-list/models/books.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$: Observable<readonly Book[]> = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store<{ books: Book[] }>) {}

  ngOnInit() {
    // this.booksService
    //   .getBooks()
    //   .subscribe((books) =>
    //     this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    //   );

    this.store.dispatch({ type: '[Books Page] Load Books' });
  }
}
