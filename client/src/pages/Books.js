import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBook from "./AddBook";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    await axios.get(`http://localhost:8080/books`).then((data) => {
      console.log(data);
    });
  });
  return <AddBook />;
};

export default Books;
