const { addBook } = require("../controllers/book.controller");

const router = require("express").Router();

router.post("/books", addBook);

module.exports = router;
