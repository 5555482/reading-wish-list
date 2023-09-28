import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = title => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
