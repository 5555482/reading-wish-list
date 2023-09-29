import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook, onEditBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDeleteBook(book.id);
  };

  const handleShowEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEditBook(id, newTitle);
  };

  return (
    <div className="book-show">
      {showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : book.title}
      <div className="actions">
        <button className="edit" onClick={handleShowEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
