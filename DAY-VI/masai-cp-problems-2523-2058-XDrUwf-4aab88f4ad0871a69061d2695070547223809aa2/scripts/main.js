// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let fetchRecipesBtn = document.getElementById("fetch-recipes");
let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let recipesArray = [];
let startIndex = 0; // Starting index for fetching recipes
const batchSize = 5; // Number of recipes to fetch in each batch

// Event Listener for Fetch Recipes button
fetchRecipesBtn.addEventListener("click", fetchRecipes);

// Event Listener for Infinite Scrolling
// mainSection.addEventListener("scroll", handleInfiniteScroll);

async function fetchRecipes() {
  try {
    // Fetch recipes with a limit of 5
    const response = await fetch(`${urlAllRecipes}?_start=${startIndex}&_limit=${batchSize}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch recipes. Status: ${response.status}`);
    }

    const newRecipes = await response.json();
    recipesArray = [...recipesArray, ...newRecipes]; // Append new recipes to the existing array
    renderRecipes();

    startIndex += batchSize; // Update the starting index for the next batch
    updateTotalResults(); // Update total results count
  } catch (error) {
    console.error(error);
  }
}
window.addEventListener("scroll", handleInfiniteScroll);


function handleInfiniteScroll() {
  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchRecipes(); // Fetch the next batch of recipes when scrolling to the bottom
  }
}
function renderRecipes() {
  mainSection.innerHTML = "";
  recipesArray.forEach((recipe) => {
    const recipeElement = createRecipeElement(recipe);
    mainSection.appendChild(recipeElement);
  });
}

function createRecipeElement(recipe) {
  const recipeElement = document.createElement("div");
  recipeElement.classList.add("recipe");
  recipeElement.setAttribute("id", "recipe-wrapper");
  recipeElement.innerHTML = `

  <div class="recipe-wrapper">
  <img src=${recipe.image} alt="err"/>
  <h3>${recipe.name}</h3>
  </div>

    <p>₹ ${recipe.price}</p>

  `;
  return recipeElement;
}

function updateTotalResults() {
  totalResult.textContent = recipesArray.length;
}
