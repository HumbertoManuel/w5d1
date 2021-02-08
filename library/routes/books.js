const router = require("express").Router();
const Book = require('../models/Book');

router.get('/books', (req, res) => {
  // get all the books from the database -> find() returns all the documents
  Book.find().then(booksFromDB => {
    console.log(booksFromDB);
    // render a books view to display them
    res.render('books', { booksList: booksFromDB })
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;