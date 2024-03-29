const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  businessName: String,
  optin: String,
  score: String,
  q1a: String,
  q1b: String,
  q1c: String,
  q1d: String,
  q1e: String,
  q2a: String,
  q2b: String,
  q2c: String,
  q2d: String,
  q2e: String,
  q3a: String,
  q3b: String,
  q3c: String,
  q3d: String,
  q3e: String,
  q4a: String,
  q4b: String,
  q4c: String,
  q4d: String,
  q4e: String,
  q5a: String,
  q5b: String,
  q5c: String,
  q5d: String,
  q5e: String,
  userName: String,
  password: String,
  token: String,
  roles: String
})

module.exports.User = mongoose.model('User', userSchema, 'Users')