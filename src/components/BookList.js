import React, { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedListOfBooks = books.map(book => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedListOfBooks}</div>;
}

export default BookList;
