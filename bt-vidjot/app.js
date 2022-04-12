const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Connect to mongoose
mongoose
  .connect('mongodb://localhost/vidjot-dev')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(err));

// Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');

// Handlebars middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', { title });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

// Add Ideo Form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

const port = 4500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
