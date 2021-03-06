const Joi = require('joi')
const bcrypt = require('bcrypt')
const { User } = require('../models/user')
const _ = require('lodash')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Invalid email or password.')

  const passwordIsValid = await bcrypt.compare(req.body.password, user.password)
  if (!passwordIsValid) return res.status(400).send('Invalid user or password.')

  const token = user.generateAuthToken()
  res.send(token)
})

// Information Expert Principle

function validate(req) {
  schema = {
    email: Joi.string().max(200).required().email(),
    password: Joi.string().min(8).max(200).required(),
  }

  return Joi.validate(req, schema)
}

module.exports = router
