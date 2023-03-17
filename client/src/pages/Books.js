import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBook from "./AddBook";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const res = await axios.get(`http://localhost:8080/books`);
      console.log(res);
      setBooks(res.data);
    }
    getBooks();
  }, [0]);
  return <AddBook />;
};

export default Books;
