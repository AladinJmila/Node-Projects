const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

// Handlebars middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', { title });
});

app.get('/about', (req, res) => {
  res.render('about');
});

const port = 4500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
