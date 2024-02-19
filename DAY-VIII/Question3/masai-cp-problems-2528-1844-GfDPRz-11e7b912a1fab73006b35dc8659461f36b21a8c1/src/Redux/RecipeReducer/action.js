// recipeActions.js
import { RECIPE_REQUEST_PENDING, RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_SUCCESS } from "./actionTypes";

export const fetchRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: RECIPE_REQUEST_PENDING });
    try {
        const response = await fetch('http://localhost:8080/recipe');
        const data = await response.json();
  
        dispatch({ type: RECIPE_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type:  RECIPE_REQUEST_FAILURE, payload: error.message });
      }
  };
};
