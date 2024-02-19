import React from "react";
import { useSelector } from "react-redux";
import { BookCard } from "./BookCard"; 

export const BookList = () => {
  const books = useSelector((state) => state.books.books); 

  return (
    <div data-testid="book-list" className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id} 
          book={book}
        />
      ))}
    </div>
  );
};
