const { bookModel } = require("../models");

const addBook = async (req, res) => {
  const { name, author, price } = req.body;
  try {
    const book = await bookModel.create({
      name: name,
      author: author,
      price: price,
    });
    console.log(book);
    return res
      .status(201)
      .json({ message: "book added successfully", data: book });
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.findAll();
    return res.status(200).json({ message: "found books", data: books });
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
};

// Function to update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.update(
      {
        price: req.body.price,
      },
      {
        where: {
          id: id,
        },
      }
    );
    console.log(user);
    res.status(202).json("book updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Function to delete the book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "book deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
