// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// // import { reducer as authReducer } from "./AuthReducer/reducer";
// // import { reducer as bookReducer } from "./BookReducer/reducer";

// const rootReducer = combineReducers({
  
// });

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// // NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
// if (window.Cypress) {
//   window.store = store;
// }

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./AuthReducer/reducer";
import bookReducer from "./BookReducer/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
if (window.Cypress) {
  window.store = store;
}