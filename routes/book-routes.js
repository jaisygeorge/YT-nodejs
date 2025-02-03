const express = require("express");
const {
  createAuthor,
  createBook,
  getBookWithAuthor,
  getBookWithAuthorName
} = require("../controllers/book-controller");

const router = express.Router();

router.post("/author", createAuthor);
router.post("/book", createBook);
router.get("/book/:id", getBookWithAuthor);
router.get("/book-author/:id", getBookWithAuthorName);

module.exports = router;