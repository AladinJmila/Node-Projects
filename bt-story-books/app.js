const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const dbURI = require('./config/db');
const express = require('express');
const app = express();
const passport = require('passport');
require('./config/passport')(passport);
const session = require('express-session');

// Routes
const index = require('./routes/index');
const auth = require('./routes/auth');
const stories = require('./routes/stories');

app.use(
  session({ secret: 'angry cat', resave: false, saveUninitialized: false })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

mongoose
  .connect(dbURI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log(err));

// Set gloabal varialbes
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/stories', stories);
