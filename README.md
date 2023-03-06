# Terms
- Actions describe unique events that are dispatched from components and services.
  - Does only have the name of action 
- State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
  - The code to add data to the store / perform the action described in actions.
- Selectors are pure functions used to select, derive and compose pieces of state.
  - Code for fetching data from store (Reverse Reducers)
- State is accessed with the Store, an observable of state and an observer of actions.
  - Reference to the store
- Reducers are only responsible for deciding which state transitions need to occur for a given action. In an application there is also a need to handle impure actions, such as AJAX requests, in NgRx we call them [Effects](https://ngrx.io/guide/effects).
  - Move service calls from components


# Flow
Component has reference to store with DI:

```typescript
constructor(private store: Store<{ count: number }>) {
  this.count$ = store.select('count');
}
```

Component will call dispatch with action defined in actions:

```typescript
this.store.dispatch(increment()); // Action = increment
```

Action:

```typescript
export const increment = createAction('[Counter Component] Increment');
```

String with component name and action

Calling dispatch will use the effects or reducer to convert action to code:

Reducer:

```typescript
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
);
```

Effects:

Effects will make ex. Network Request, set Loading flags, and finally store the values into the store, so that component can subscribe to the store for data.

```typescript
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
```

