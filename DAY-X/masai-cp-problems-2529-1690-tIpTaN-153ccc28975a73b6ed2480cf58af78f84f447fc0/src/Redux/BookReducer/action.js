import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS , EDIT_BOOK_SUCCESS, EDIT_BOOK_FAILURE } from "./actionTypes";

export const getBooks = (books) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8080/books');
      const data = await response.json();
      console.log({data})
      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOKS_FAILURE,
        payload: error.message
      });
    }
  };
};


export const editBookSuccess = () => {
  return {
    type: EDIT_BOOK_SUCCESS
  };
};

export const editBookFailure = (error) => {
  return {
    type: EDIT_BOOK_FAILURE,
    payload: error
  };
};

export const editBook = (id, updatedBookData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/books/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBookData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update book');
      }
      
      dispatch(editBookSuccess());
    } catch (error) {
      dispatch(editBookFailure(error.message));
    }
  }
}

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
