import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/services/books.service'
import { BooksActions, BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffects {

  // Here we can also set isLoading Flags
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Books Page] Load Books'),
    exhaustMap(() => this.bookService.getBooks()
      .pipe(
        map(books => BooksApiActions.retrievedBookList({ books })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService
  ) {}
}
