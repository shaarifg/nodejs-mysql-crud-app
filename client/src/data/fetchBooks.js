import axios from "axios";

export async function fetchBooks() {
  const res = await axios.get(`http://localhost:8080/books`);
  return res;
}
