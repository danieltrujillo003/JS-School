// Import dependencies
const express = require('express');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const app = express();
mongoose.connect('mongodb://localhost:27017/bookshelf', { useNewUrlParser: true });

// Import local files
const Book = require('./models/books');
const User = require('./models/users');

// Middlewares
app.use(express.json());

// GET requests
app.get('/', (req, res) => res.send('Welcome to the Jobsity Bookshelf API. Please authenticate in /users/auth'));

app.get('/books', (req, res) => {
  const bookLocation = req.query.location;
  if (bookLocation) {
    Book.find({ whereAvaliable: bookLocation }, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else if (!books) {
        res.status(404).send('There is no books in that location at the moment. You can go to /books/add and add some');
      } else {
        res.status(200).send({ books });
      }
    });
  } else {
    Book.find({}, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else if (!books) {
        res.status(404).send('There is no books at the moment. You can go to /books/add and add some');
      } else {
        res.status(200).send({ books });
      }
    });
  }
});

app.get('/books/:isbn', (req, res) => {
  Book.findOne({ isbn: req.params.isbn }, (err, books) => {
    if (err) {
      res.status(500).send(err);
    } else if (!books) {
      res.status(404).send('There is no books located in Medellin at the moment. You can go to /books/add and add some');
    } else {
      res.status(200).send({ books });
    }
  });
});

app.get('/books/location/medellin', (req, res) => {
  Book.find({ $or: [{ whereAvaliable: 'Medellin' }, { whereAvaliable: 'Digital' }] }, (err, books) => {
    if (err) {
      res.status(500).send(err);
    } else if (!books) {
      res.status(404).send('There is no books located in Medellin at the moment. You can go to /books/add and add some');
    } else {
      res.status(200).send({ books });
    }
  });
});

app.get('/books/location/cartagena', (req, res) => {
  Book.find({ $or: [{ whereAvaliable: 'Cartagena' }, { whereAvaliable: 'Digital' }] }, (err, books) => {
    if (err) {
      res.status(500).send(err);
    } else if (!books) {
      res.status(404).send('There is no books located in Cartagena at the moment. You can go to /books/add and add some');
    } else {
      res.status(200).send({ books });
    }
  });
});

app.get('/books/location/quito', (req, res) => {
  Book.find({ $or: [{ whereAvaliable: 'Quito' }, { whereAvaliable: 'Digital' }] }, (err, books) => {
    if (err) {
      res.status(500).send(err);
    } else if (!books) {
      res.status(404).send('There is no books located in Quito at the moment. You can go to /books/add and add some');
    } else {
      res.status(200).send({ books });
    }
  });
});

app.get('/books/location/digital', (req, res) => {
  Book.find({ whereAvaliable: 'Digital' }, (err, books) => {
    if (err) {
      res.status(500).send(err);
    } else if (!books) {
      res.status(404).send('There is no books located in Digital at the moment. You can go to /books/add and add some');
    } else {
      res.status(200).send({ books });
    }
  });
});

// POST requests
app.post('/books/add', (req, res) => {
  const bookIsbn = req.body.isbn;
  const bookLocation = req.body.location;
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${bookIsbn}`;

  const book = new Book();
  book.whereAvaliable = bookLocation;

  async function apiSearch(urlDir) {
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
        res.status(500).send(err);
      } else {
        res.status(200).send({ book: newBook });
      }
    });
  }
  apiSearch(url);
});

// PATCH requests
app.patch('/books/:isbn/borrow', (req, res) => {
  Book.findOne({ $and: [{ isbn: req.params.isbn }, { isLent: false }] }, (err, books) => {
    books.isLent = true;
    res.send({ books });
  });
});

app.post('/auth/signup', (req, res) => {
  const user = new User();
  user.email = req.body.email;
  user.fullName = req.body.username;
  user.hash_password = req.body.password;

  user.save((err, newUser) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`${newUser.fullName} have signed up`);
    }
  });
});


const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening at port ${port}...`));
