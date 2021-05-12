const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const genres = [
  { id: 1, name: 'Comedy' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Romance' },
  { id: 4, name: 'Thriller' },
]

app.get('/api/genres', (req, res) => {
  res.send(genres)
})

app.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const genre = {
    id: Date.now().toString(),
    name: req.body.name,
  }

  genres.push(genre)
  res.send(genre)
})

app.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id))
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.')

  const { error } = validateGenre(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  genre.name = req.body.name
  res.send(genre)
})

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id))
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.')

  res.send(genre)
})

app.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id))
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.')

  const index = genres.indexOf(genre)
  genres.splice(index, 1)

  res.send(genre)
})

function validateGenre(course) {
  const schema = {
    name: Joi.string().required(),
  }
  return Joi.validate(course, schema)
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
