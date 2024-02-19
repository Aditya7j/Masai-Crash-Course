import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate("/")
  }

  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
