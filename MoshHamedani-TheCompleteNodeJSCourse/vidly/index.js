require('express-async-errors')
const winston = require('winston')
require('winston-mongodb')
const error = require('./middleware/error')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const config = require('config')
const mongoose = require('mongoose')
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const movies = require('./routes/movies')
const rentals = require('./routes/rentals')
const users = require('./routes/users')
const auth = require('./routes/auth')
const express = require('express')
const app = express()

process.on('uncaughtException', ex => {
  console.log('WE GOT AN UNCAUGHT EXCEPTION')
  winston.error(ex.message, ex)
})

// process.on('unhandledException')

winston.add(winston.transports.File, { filename: 'logfile.log' })
winston.add(winston.transports.MongoDB, {
  db: 'mongodb://localhost/vidliz',
  level: 'info',
})

throw new Error('Something failed during startup.')

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.')
  process.exit(1)
}

mongoose
  .connect('mongodb://localhost/vidliz')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect the MongoDB...'))

app.use(express.json())
app.use('/api/genres', genres)
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use(error)

const port = process.env.PORT || 3500
app.listen(port, () => console.log(`Listening on port ${port}...`))
