import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div data-cy="welcome-text">
      {/* Add the message along with the link */}
      <h1>Welcome to home page click here to<Link to="/login">login</Link></h1>
    </div>
  );
};