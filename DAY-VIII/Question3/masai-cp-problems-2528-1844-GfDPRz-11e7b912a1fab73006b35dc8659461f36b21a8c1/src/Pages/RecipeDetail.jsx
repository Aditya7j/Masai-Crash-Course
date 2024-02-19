import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist"

export const RecipeDetail = () => {
  const {id} = useParams()
  const [singleData,setSingleData] = useState();
  const [ingredients,setIngredients] = useState([]);
  console.log({id})

  useEffect(()=>{
    axios.get(`http://localhost:8080/recipe/${id}`).then((res)=>{
      setSingleData(res?.data)
      setIngredients(res?.data?.ingredients)
    }).catch((err)=>{
      console.log(err?.message)
    })
  })

  return (

    <div className={"recipe-card"} id="single-card">
        <h1>{singleData?.id}</h1>
        <img className="recip-image" src={singleData?.image} alt="Recipe" />
        <h1>{singleData?.name}</h1>
        <h5 className={singleData?.type === "veg" ? "recipe-veg":"recipe-nonveg"}>Type: {singleData?.type}</h5>
        <h6>Category: {singleData?.category}</h6>
        <h4>₹ {singleData?.price}</h4>
        <h1>Ingredients</h1>
        {ingredients.map((e)=>(
          <>
            <p>{e}</p>
          </>
        ))}
    </div>
  );
};
