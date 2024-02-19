import React from "react";

export const Login=()=> {
  return (
    <div>
      <form data-cy="login-form">
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div className="go-back-link-div">
        {/* Add a Link tag here with textContent `Go Back` on clicking it we will be redirected to HomePage */}
      </div>
    </div>
  );
}

