const {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const router = require("express").Router();

router.post("/books", addBook);
router.get("/books", getAllBooks);
router.put("/books", updateBook);
router.delete("/books", deleteBook);

module.exports = router;
