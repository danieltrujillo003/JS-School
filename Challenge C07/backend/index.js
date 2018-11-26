// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

const app = express();

// Import local files
const User = require('./models/users');
const booksControllers = require('./controllers/booksControllers');

// Connect to mongoose
mongoose.connect('mongodb://localhost:27017/bookshelf', { useNewUrlParser: true });

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// GET requests
app.get('/', (req, res) => res.send({ message: 'Welcome to the Jobsity Bookshelf API. Please authenticate in /users/auth' }));

app.get('/books', booksControllers.getBooks);

app.get('/books/:isbn', booksControllers.getByIsbn);

// POST requests
app.post('/books', booksControllers.addBook);

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

// PATCH requests
app.patch('/books/:isbn', booksControllers.borrowBook);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening at port ${port}...`));
