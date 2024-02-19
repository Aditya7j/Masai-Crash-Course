import React from "react";
import "./books.css";
import { useNavigate } from "react-router-dom";

export const BookCard = ({book}) => {
  const navigate= useNavigate();

  const handleEdit = (id)=>{
    navigate(`/books/${id}`)
  }


  return (
    <div className="book-card">
      <img src={book?.cover_photo} alt="err"/>
      <h1>{book?.book_name}</h1>
      <h3>{book?.author}</h3>
      <span>{book?.category ? book?.category.replace(/_/g, " "):book?.category}</span>
      <h5>{book?.release_year}</h5>
      <h5>Chapters : {book?.no_of_chapters}</h5>
      <button onClick={(id)=>handleEdit(book?.id)}>Edit</button>
    </div>
  );
};
