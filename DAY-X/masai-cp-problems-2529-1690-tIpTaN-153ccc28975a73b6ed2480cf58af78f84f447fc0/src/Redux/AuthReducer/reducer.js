// reducer.js
import { UPDATE_AUTH_STATUS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        token: action.payload.token
      };
    default:
      return state;
  }
};

export default authReducer;
