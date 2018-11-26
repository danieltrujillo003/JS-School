const fetch = require('node-fetch');
const Book = require('../models/books');

const locationList = ['medellin', 'quito', 'cartagena', 'digital'];

// getBooks declared to show either all books or filtered by a query
function getBooks(req, res) {
  if (req.query.location && req.query.location !== 'all') {
    const bookLocation = req.query.location.toLowerCase();
    if (locationList.includes(bookLocation)) {
      Book.find({ whereAvaliable: bookLocation }, (err, books) => {
        if (err) {
          res.status(500).send({ message: err });
        } else if (!books) {
          res.status(404).send({ message: 'There is no books in that location at the moment. You can go to /books and add some' });
        } else {
          res.status(200).send({ books });
        }
      });
    } else {
      res.status(404).send({ message: 'We are not avaliable in this location yet. Try another location' });
    }
  } else {
    Book.find({}, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else if (!books) {
        res.status(404).send({ message: 'There is no books at the moment. You can go to /books/add and add some' });
      } else {
        res.status(200).send({ books });
      }
    });
  }
}

// getByIsbn declared to show general info of abook in the database with the ISBN as a query
function getByIsbn(req, res) {
  Book.find({ isbn: req.params.isbn }, (err, books) => {
    if (err) {
      res.status(500).send({ message: 'There was an error. Pease try again later' });
    } else if (!books) {
      res.status(404).send({ message: 'There is no books with that ISBN at the moment. You can go to /books and add some' });
    } else {
      res.status(200).send({ books });
    }
  });
}

// addBook declared to get a selected book info from Google API
function addBook(req, res) {
  const bookIsbn = req.body.isbn;
  const bookLocation = req.body.location.toLowerCase();
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${bookIsbn}`;

  const book = new Book();
  book.whereAvaliable = bookLocation;

  async function apiSearch(urlDir) {
    try {
      const content = await fetch(urlDir).then(async got => got.json());

      let year = new Date(content.items[0].volumeInfo.publishedDate);
      year = year.getFullYear();

      book.title = content.items[0].volumeInfo.title;
      book.author = content.items[0].volumeInfo.authors;
      book.year = year;
      book.summary = content.items[0].volumeInfo.description;
      book.pages = content.items[0].volumeInfo.pageCount;
      book.rating = content.items[0].volumeInfo.averageRating;
      book.cover = content.items[0].volumeInfo.imageLinks.thumbnail;
      book.isbn = req.body.isbn;

      book.save((err, newBook) => {
        if (err) {
          res.status(500).send({ message: 'There was an error. PLease try again later' });
        } else {
          res.status(200).send({ newBook });
        }
      });
    } catch (err) {
      res.status(404).send({ message: 'Please use a valid ISBN' });
    }
  }
  if (locationList.includes(bookLocation)) {
    apiSearch(url);
  } else {
    res.status(404).send({ message: 'We are not avaliable in this location yet. Try another location' });
  }
}

// borrowBook declared to allow the user lend a book
function borrowBook(req, res) {
  Book.findOneAndUpdate(
    { $and: [{ isbn: req.params.isbn }, { isLent: false }] },
    { isLent: true },
    (err, borrowedBook) => {
      if (!borrowedBook) {
        res.status(404).send({ message: 'There was an error. Please check the ISBN or try again later' });
      }
      res.send({ borrowedBook });
    },
  );
}

module.exports = {
  addBook, getBooks, getByIsbn, borrowBook,
};
