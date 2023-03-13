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

module.exports = {
  addBook,
};
