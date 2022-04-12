const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
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

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// Process Form
app.post('/ideas', (req, res) => {
  const { title, details } = req.body;

  let errors = [];

  if (!title) errors.push({ text: 'Please add a title' });
  if (!details) errors.push({ text: 'Please add some details' });

  if (errors.length) return res.render('ideas/add', { errors, title, details });

  res.send('passed');
});

const port = 4500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
