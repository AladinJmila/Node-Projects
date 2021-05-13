const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const logger = require('./middleware/logger')
const authenticator = require('./authenticator')
const express = require('express')
const courses = require('./routes/courses')
const home = require('./routes/home')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())
app.use('/', home)
app.use('/api/courses', courses)

// Configuration
console.log('Application Name: ' + config.get('name'))
console.log('Mail Server: ' + config.get('mail.host'))
// console.log('Mail Passowrd: ' + config.get('mail.password'))

if (app.get('env') === 'development') {
  app.use(morgan('tiny'))
  console.log('Morgan enabled')
}

app.use(logger)

app.use(authenticator)

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
