import { useNavigate } from "react-router-dom/dist";
import "./styles.css";

export const RecipeCard = ({recipe}) => {

  const navigate = useNavigate();

  const handleNavigate = (id) =>{
    navigate(`/recipe/${id}`)
  }

  return (
    <div className={"recipe-card"}>
        <img className="recip-image" src={recipe?.image} alt="Recipe" />
        <h1>{recipe?.name}</h1>
        <h5 className={recipe?.type === "veg" ? "recipe-veg":"recipe-nonveg"}>Type: {recipe?.type}</h5>
        <h6>Category: {recipe?.category}</h6>
        <h4>₹ {recipe?.price}</h4>
        <button onClick={()=>handleNavigate(recipe.id)}>View Ingredients</button>
    </div>
  );
};


