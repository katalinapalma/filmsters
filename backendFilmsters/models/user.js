mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true
  },
  movies: {
    type: Array
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;