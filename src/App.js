import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = title => {
    console.log(title);
  };

  return (
    <div className="App">
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
