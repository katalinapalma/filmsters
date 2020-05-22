const User = require('../models/user')

getUsers = (req, res, next) => {
  var query;
  if (req.query.email) {
    query = User.find({
      email: req.query.email
    })
  } else {
    query = User.find()
  }
  query.exec().then((users) => {
    return res.status(200).send(users)
  }).catch((error) => next(error))
}

getUserById = (req, res, next) => {
  User.findById(req.params.id).then((user) => {
    return res.status(200).send(user)
  }).catch((error) => next(error))
}

createUser = (req, res, next) => {
  const body = req.body
  const user = new User(body)
  user
    .save()
    .then(() => {
      return res.status(200).send(user)
    })
    .catch(error => next(error))
}

updateUser = (req, res, next) => {
  const body = req.body
  User.updateOne({
    _id: req.params.id
  }, {
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    password: body.password,
    movies: body.movies
  }, {
    new: true,
    upsert: true,
    runvalidators: true,
  }).then((status) => {
    if (status.upserted)
      res.status(201)
    else if (status.nModified)
      res.status(200).json(body)
    else
      res.status(204)
    res.send()
  }).catch(error => next(error))
}

deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}