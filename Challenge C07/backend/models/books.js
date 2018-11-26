const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  cover: {
    type: String,
    required: true,
  },
  whereAvaliable: {
    type: String,
    required: true,
  },
  isLent: {
    type: Boolean,
    default: false,
  },
  isbn: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Book', BookSchema);
