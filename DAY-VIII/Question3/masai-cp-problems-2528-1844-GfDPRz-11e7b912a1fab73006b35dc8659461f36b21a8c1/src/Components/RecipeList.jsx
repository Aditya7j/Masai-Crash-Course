// RecipeList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { RecipeCard } from "./RecipeCard";
import { fetchRecipes } from "../Redux/RecipeReducer/action";

export const RecipeList = () => {
  const dispatch = useDispatch();
  const { isLoading, recipes } = useSelector(state => state.recipe); 

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div data-testid="recipe-list" className="recipe-list">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};
