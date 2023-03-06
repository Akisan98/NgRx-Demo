import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookListComponent } from './book-list/book-list.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collector.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer  }), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
