import React, { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
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
