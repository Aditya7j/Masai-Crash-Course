// BookReducer.js
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, EDIT_BOOK_SUCCESS, EDIT_BOOK_FAILURE } from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  books: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.payload
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case EDIT_BOOK_SUCCESS:
      return {
        ...state,
      };
    case EDIT_BOOK_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bookReducer;
