mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movietitle: String,
  name: String,
  review: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;