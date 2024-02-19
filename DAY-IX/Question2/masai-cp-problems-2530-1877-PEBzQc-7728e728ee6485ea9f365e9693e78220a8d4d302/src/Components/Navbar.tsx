import React from "react";

export const Navbar = () => {
  return (
    <div>
      <h2>Media Post</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-post-link" href="/add-post">
        Add New Post
      </a>
    </div>
  );
};
