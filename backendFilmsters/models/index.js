const mongoose = require('mongoose')
const user = require('./user.js')
const reviews = require('./reviews.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/users"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
  models: {
    user,
    reviews
  }
} 