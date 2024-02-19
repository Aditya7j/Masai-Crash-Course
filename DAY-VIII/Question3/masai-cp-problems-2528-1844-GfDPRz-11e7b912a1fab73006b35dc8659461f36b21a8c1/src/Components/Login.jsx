// Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom/dist";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login(email, password));
    navigate("/")
  };

  return (
    <div>
      <h2>Log In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};
