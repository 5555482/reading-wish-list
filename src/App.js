import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = async title => {
    // setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const handleDeleteBook = id => {
    const updatedListOfBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedListOfBooks);
  };
  const handleEditBook = (id, newTitle) => {
    const updatedListOfBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedListOfBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onEditBook={handleEditBook}
      />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
