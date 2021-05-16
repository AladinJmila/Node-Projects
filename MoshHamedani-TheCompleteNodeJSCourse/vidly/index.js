const mongoose = require('mongoose')
const express = require('express')
const app = express()
const genres = require('./routes/genres')
const customers = require('./routes/customers')

mongoose
  .connect('mongodb://localhost/vidliz')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect the MongoDB...'))

app.use(express.json())
app.use('/api/genres', genres)
app.use('/api/customer', customers)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
