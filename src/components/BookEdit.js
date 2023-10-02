import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { handleEditBook } = useBooksContext;

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
