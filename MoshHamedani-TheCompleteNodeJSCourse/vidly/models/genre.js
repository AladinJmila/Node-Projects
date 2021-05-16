const mongoose = require('mongoose')
const Joi = require('joi')

const Genre = mongoose.model(
  'Genere',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minLength: 5,
      maxLenght: 50,
    },
  })
)

function validateGenre(genre) {
  const schema = {
    name: Joi.string().required(),
  }
  return Joi.validate(genre, schema)
}

exports.Genre = Genre
exports.validate = validateGenre
