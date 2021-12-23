const config = require('config')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 200,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlenght: 1000,
  },
  isAdmin: Boolean,
  roles: [],
  operations: [],
})

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get('jwtPrivateKey')
  )
  return token
}

const User = mongoose.model('User', userSchema)

function validateUser(user) {
  schema = {
    name: Joi.string().max(50).required(),
    email: Joi.string().max(200).required().email(),
    password: Joi.string().min(8).max(200).required(),
  }

  return Joi.validate(user, schema)
}

exports.User = User
exports.validate = validateUser
