const Review = require('../models/reviews')

getReviews = (req, res, next) => {
  var query;
  if (req.query.movieId) {
    query = Review.find({
      movieId: req.query.movieId
    })
  } else {
    query = Review.find()
  }
  query.exec().then((reviews) => {
    return res.status(200).send(reviews)
  }).catch((error) => next(error))
}

getReviewByMovieId = (req, res, next) => {
  Review.find({
    movieId: req.params.movieid
  }).then((review) => {
    return res.status(200).send(review)
  }).catch((error) => next(error))
}

postReview = (req, res, next) => {
  const body = req.body

  Review.updateOne({
    movieId: req.params.movieid
  }, {
    $push: {
      reviews: {
        name: body.name,
        text: body.text
      }
    }
  }, {
    new: true,
    upsert: true,
    runvalidators: true,
  }).then((status) => {
    if (status.upserted) {
      res.status(201)
    } else if (status.nModified) {
      res.status(200)
    } else {
      res.status(204)
    }
    Review.findOne({
      movieId: req.params.movieid
    }).then((reviews) => {
      res.send(reviews)
    })
  }).catch((error) => next(error))
}


deleteReview = (req, res, next) => {
  Review.deleteOne({
    movieId: req.params.movieid
  }).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(404)
  }).catch((error) => next(error))
}

module.exports = {
  getReviews,
  getReviewByMovieId,
  postReview,
  deleteReview
}