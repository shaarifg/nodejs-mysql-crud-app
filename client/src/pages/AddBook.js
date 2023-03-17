import axios from "axios";
import { useState } from "react";
import "./addbook.css";

const AddBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    price: null,
    coverurl: "",
    genre: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/books`, formData).then((res) => {
      console.log(res.data);
      //   console.log(formData);
      setFormData("");
    });
  };

  return (
    <div className="container">
      <h2>Add a New Book</h2>
      <form>
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Book Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter book name..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="author">Author</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="price">Price</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter price..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="genre">Genre</label>
          </div>
          <div className="col-75">
            <select id="genre" name="genre" onChange={handleChange}>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Science Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="coverurl">Cover URL</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="coverurl"
              name="coverurl"
              placeholder="Enter cover URL..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
