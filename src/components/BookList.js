import React from "react";
import BookShow from "./BookShow";

function BookList({ books, onDeleteBook, onEditBook }) {
  const renderedListOfBooks = books.map(book => (
    <BookShow
      key={book.id}
      book={book}
      onDeleteBook={onDeleteBook}
      onEditBook={onEditBook}
    />
  ));
  return <div className="book-list">{renderedListOfBooks}</div>;
}

export default BookList;
