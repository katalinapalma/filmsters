mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: Number,
  reviews:[{
    name: String,
    text: String,
  }]
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;