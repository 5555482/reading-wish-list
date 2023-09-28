import React from "react";
import BookShow from "./BookShow";

function BookList({ books }) {
  const renderedListOfBooks = books.map(book => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedListOfBooks}</div>;
}

export default BookList;
