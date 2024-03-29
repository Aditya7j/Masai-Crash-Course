// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RecipeReducer/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
if (window.Cypress) {
    window.store = store;
  }

export default store;

