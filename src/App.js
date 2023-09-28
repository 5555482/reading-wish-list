import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = title => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };

  return (
    <div className="App">
      {books.length}
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
