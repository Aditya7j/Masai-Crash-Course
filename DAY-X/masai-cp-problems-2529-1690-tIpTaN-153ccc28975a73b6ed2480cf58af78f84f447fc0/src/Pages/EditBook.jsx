import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editBooks, setEditBooks] = useState({
    book_name: "",
    author: "",
    no_of_chapters: 0
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        setEditBooks(res?.data)
      })
  }, [id])

  const handleUpdate = () => {
    axios.patch(`http://localhost:8080/books/${id}`, editBooks)
      .then((res) => {
        alert("Books successfully edited");
        navigate("/")
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBooks(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: {id}</h1>
      <input type="text" name="book_name" placeholder="Name" data-testid="book-name" value={editBooks.book_name} onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" data-testid="book-author" value={editBooks.author} onChange={handleChange} />
      <input type="number" name="no_of_chapters" placeholder="Number of Chapters" data-testid="book-chapter" value={editBooks.no_of_chapters} onChange={handleChange} />
      <button data-testid="update-book" onClick={handleUpdate}>Update</button>
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
