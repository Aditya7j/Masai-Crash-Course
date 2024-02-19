import React from "react";

export const Dashboard=()=>{
  return (
    <div data-testid="dashboard-component">
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          {/* The token should be displayed below */}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div data-testid="room-container">
        {/* Either Loader or RoomsContainer should exist below */}
      </div>
    </div>
  );
}

