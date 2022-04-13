const mongoose = require('mongoose');
const express = require('express');
const app = express();
const passport = require('passport');
require('./config/passport')(passport);

const auth = require('./routes/auth');

const port = process.env.PORT || 4500;

app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

app.get('/', (req, res) => {
  res.send('It works');
});
