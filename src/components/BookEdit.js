import React, { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { handleEditBook } = useContext(BooksContext);

  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit();
    handleEditBook(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>New title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
