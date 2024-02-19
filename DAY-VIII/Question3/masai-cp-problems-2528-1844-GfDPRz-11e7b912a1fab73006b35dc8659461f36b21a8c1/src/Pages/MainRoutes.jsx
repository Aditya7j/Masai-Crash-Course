import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { Homepage } from "./Homepage";
import { RecipeDetail } from "./RecipeDetail";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Add all routes here */}
      <Route path="*" element={<h1>404 Page Not Foundd</h1>} />
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/recipe/:id" element={<RecipeDetail/>}/>
    </Routes>
  );
};
