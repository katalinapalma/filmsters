const express = require('express')
const router = express.Router()

const user = require('./user.js')
const review = require('./reviews.js')

router.get("/user", user.getUsers)
router.get("/user/:id", user.getUserById)
router.post("/user", user.createUser)
router.put("/user/:id", user.updateUser)
router.delete("/user/:id", user.deleteUser)

router.get("/review", review.getReviews)
router.get("/review/:id", review.getReviewById)
router.post("/review", review.postReview)
router.delete("/review/:id", review.deleteReview)

module.exports = router