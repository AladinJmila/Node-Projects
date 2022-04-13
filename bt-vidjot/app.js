const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
require('./config/passport')(passport);
const dbURI = require('./config/db');

const app = express();

// Load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

// Launch the server
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

// Connect to mongoose
mongoose
  .connect(dbURI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(err));

// Load Idea Model

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

// Adding authentication to the session with passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash middleware
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;

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

// Use routes
app.use('/ideas', ideas);
app.use('/users', users);
