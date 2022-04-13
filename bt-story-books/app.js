const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

app.get('/', (req, res) => {
  res.send('It works');
});
