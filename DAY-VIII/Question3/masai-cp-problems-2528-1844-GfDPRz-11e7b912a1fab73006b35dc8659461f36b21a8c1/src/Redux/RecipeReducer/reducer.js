import { RECIPE_REQUEST_PENDING, RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  recipes: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case RECIPE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, recipes: action.payload }; // Set recipes when request is successful
    case RECIPE_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default recipeReducer;
