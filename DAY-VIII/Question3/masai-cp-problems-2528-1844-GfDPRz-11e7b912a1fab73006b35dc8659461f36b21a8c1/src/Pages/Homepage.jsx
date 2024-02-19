import axios from "axios";
import { RecipeList } from "../Components/RecipeList";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";

export const Homepage = () => {

  const handleSortChange = (order) => {
    axios.get(`http://localhost:8080/?category=indian&type=veg&order=${order}`).then((res)=>{
      console.log("Sorting order changed to:", res?.data);
    })
  };

  return (
    <DIV>
      <Sidebar onSortChange={handleSortChange}/>
      <RecipeList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
