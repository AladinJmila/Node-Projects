const mongoose = require('mongoose');
const dbURI = require('./config/db');
const express = require('express');
const app = express();
const passport = require('passport');
require('./config/passport')(passport);
const session = require('express-session');

const auth = require('./routes/auth');

app.use(
  session({ secret: 'angry cat', resave: false, saveUninitialized: false })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
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
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send('It works');
});
