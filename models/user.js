const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  token: String,
  roles: String,
  courseTitle: String,
  fullName: String,
  email: String,
  contactNumber: String,
  city: String,
  bio: String,
  skills: String,
  linkedIn: String,
  gitHub: String,
  portfolio: String,
  employed: String,
  image: String,
  cv: String
})

module.exports.User = mongoose.model('User', userSchema, 'Users')