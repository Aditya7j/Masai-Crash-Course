import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {

  const isAuth = useSelector(state => state.auth?.isAuth);

  return (
    <DIV>
   <h2>Recipe App</h2>
      <Link to={"/"}>Home</Link>
      {!isAuth && <Link to={"/login"}>Login</Link>}
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  box-shadow: 2px 2px 2px gray;
`;
