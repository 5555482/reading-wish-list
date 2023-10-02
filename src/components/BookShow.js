import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBook } = useContext(BooksContext);

  const handleDeleteClick = () => {
    handleDeleteBook(book.id);
  };

  const handleShowEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
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
