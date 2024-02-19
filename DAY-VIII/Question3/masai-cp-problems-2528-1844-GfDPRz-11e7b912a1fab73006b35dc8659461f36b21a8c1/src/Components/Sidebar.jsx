import React, { useState } from "react";

import styled from "styled-components";

export const Sidebar = ({onSortChange}) => {

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (order) => {
    setSortOrder(order);
    onSortChange(order);
  };


  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="recipe-indian" type="checkbox" />
        <label>Indian</label>
        <br />
        <br />
        <input data-testid="recipe-italian" type="checkbox" />
        <label>Italian</label>
        <br />
        <br />
        <input data-testid="recipe-chinese" type="checkbox" />
        <label>Chinese</label>
        <br />
        <br />
        <input data-testid="recipe-thai" type="checkbox" />
        <label>Thai</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Veg / Non-Veg</h3>
      <div>
        <input data-testid="recipe-veg" type="checkbox"  name="sort" checked={sortOrder === "asc"}
          onChange={() => handleSortChange("asc")}/>
        <label>Veg</label>
        <br />
        <br />
        <input data-testid="recipe-non-veg" type="checkbox"   name="sort"
          checked={sortOrder === "desc"}
          onChange={() => handleSortChange("desc")} />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input data-testid="recipe-sort-asc" type="radio" name="sort" />
        <label>Ascending</label>
        <br />
        <br />
        <input data-testid="recipe-sort-desc" type="radio" name="sort" />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 70%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
