import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  const renderedListOfBooks = books.map(book => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedListOfBooks}</div>;
}

export default BookList;
