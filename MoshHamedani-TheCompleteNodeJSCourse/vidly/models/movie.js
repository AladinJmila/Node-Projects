const Joi = require('joi')
const mongoose = require('mongoose')
const { genreSchema } = require('./genre')

const Movie = mongoose.model(
  'Movie',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    numbmerInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
  })
)

function validateMovie(movie) {
  const Schema = {
    title: Joi.string().min(5).max(255).required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
  }

  return Joi.validate(movie, shcema)
}

exports.Movie = Movie
exports.validate = validateMovie
