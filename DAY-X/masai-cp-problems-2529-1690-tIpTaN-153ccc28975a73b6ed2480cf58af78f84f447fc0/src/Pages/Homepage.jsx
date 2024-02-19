// Homepage.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { BookList } from "../Components/BookList";
import { getBooks } from "../Redux/BookReducer/action";

const Homepage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <DIV>
      <Sidebar />
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching books</p>
      ) : (
        <BookList />
      )}
    </DIV>
  );
};

export default Homepage;

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
