// authActions.js

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: LOGIN_SUCCESS, payload: data.token });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };
};
