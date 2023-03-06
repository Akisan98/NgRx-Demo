import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { booksReducer } from './books/state/books.reducer';
import { collectionReducer } from './books/state/collector.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CounterModule } from './counter/counter.module';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer  }),
    HttpClientModule,
    CounterModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
