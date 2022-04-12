const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
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

// Metho-override middlewarre
app.use(methodOverride('_method'));

// Express session middleware
app.use(
  session({
    secret: 'crazy-cat',
    resave: false,
    saveUninitialized: true,
  })
);

// Connect flash middleware
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.error = req.flash('error');

  next();
});

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', { title });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

// Idea Index Page
app.get('/ideas', async (req, res) => {
  const ideas = await Idea.find({}).sort('-_id').lean();

  res.render('ideas/index', { ideas });
});

// Add Idea Form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

// Edit Idea From
app.get('/ideas/edit/:id', async (req, res) => {
  const idea = await Idea.findOne({ _id: req.params.id }).lean();

  res.render('ideas/edit', { idea });
});

// Process Form
app.post('/ideas', async (req, res) => {
  const { title, details } = req.body;

  const errors = [];

  if (!title) errors.push({ text: 'Please add a title' });
  if (!details) errors.push({ text: 'Please add some details' });

  if (errors.length) return res.render('ideas/add', { errors, title, details });

  const idea = new Idea({ title, details });
  await idea.save();

  req.flash('successMsg', 'Video idea added');
  res.redirect('/ideas');
});

// Edit From Process
app.put('/ideas/:id', async (req, res) => {
  await Idea.findByIdAndUpdate(req.params.id, req.body);

  req.flash('successMsg', 'Video idea updated');
  res.redirect('/ideas');
});

// Delete Idea
app.delete('/ideas/:id', async (req, res) => {
  await Idea.findByIdAndDelete(req.params.id);
  req.flash('successMsg', 'Video idea removed');
  res.redirect('/ideas');
});

const port = 4500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
