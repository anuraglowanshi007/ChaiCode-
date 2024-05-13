require('dotenv').config();
const express = require('express');

const app = express();
// const port = process.env.PORT || 30002; // Listen to process.env.PORT if available, otherwise default to 3000
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter API called');
});

app.get('/login', (req, res) => {
  res.send('<h1>This is Form here</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
