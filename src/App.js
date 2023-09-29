import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = title => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };
  const handleDeleteBook = id => {
    const updatedListOfBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedListOfBooks);
  };
  // const handleEditBook = (id,newTitle) => {
  //   const updatedListOfBooks = books.filter(book => {
  //     if (book.id===id) {
  //       return {...book, book.title=newTitle};
  //     }
  //     return book
  //   });
  //   setBooks(updatedListOfBooks);
  // };

  return (
    <div className="app">
      <BookList books={books} onDeleteBook={handleDeleteBook} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
