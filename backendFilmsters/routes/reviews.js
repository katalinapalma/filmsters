const Review = require('../models/reviews')

getReviews = (req, res, next) => {
  var query;
  if (req.query.email) {
    query = Review.find({
      movietitle: req.query.movietitle
    })
  } else {
    query = Review.find()
  }
  query.exec().then((reviews) => {
    return res.status(200).send(reviews)
  }).catch((error) => next(error))
}

getReviewById = (req, res, next) => {
  Review.findById(req.params.id).then((review) => {
    return res.status(200).send(review)
  }).catch((error) => next(error))
}

postReview = (req, res, next) => {
  const body = req.body
  Review.create({
      movietitle: body.movietitle,
      name: body.name,
      review: body.review,
    })
    .then((review) => {
      return res.status(201).send(review)
    })
    .catch(error => next(error))
}

deleteReview = (req, res, next) => {
  Review.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(404)
  }).catch((error) => next(error))
}

module.exports = {
  getReviews,
  getReviewById,
  postReview,
  deleteReview
}