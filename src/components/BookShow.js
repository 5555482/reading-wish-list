import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDeleteBook(book.id);
  };

  const handleShowEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show">
      {showEdit ? <BookEdit book={book} /> : book.title}
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
