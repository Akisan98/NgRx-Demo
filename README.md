# Terms
- Actions describe unique events that are dispatched from components and services.
  - Does only have the name of action 
- State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
  - The code to add data to the store / perform the action described in actions.
- Selectors are pure functions used to select, derive and compose pieces of state.
  - Code for fetching data from store (Reverse Reducers)
- State is accessed with the Store, an observable of state and an observer of actions.
  - Reference to the store

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

Calling dispatch will use the reducer to convert action to code:

```typescript
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
);
```

