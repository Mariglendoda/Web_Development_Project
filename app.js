const path = require('path');

const express = require('express');

const app = express();

app.get('/', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'index.html');
  response.sendFile(htmlPath);
});

app.get('/restaurants', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'restaurants.html');
  response.sendFile(htmlPath);
});

app.get('/recommend', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'recommend.html');
  response.sendFile(htmlPath);
});

app.get('/confirm', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'confirm.html');
  response.sendFile(htmlPath);
});

app.get('/about', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'about.html');
  response.sendFile(htmlPath);
});

app.listen(3000, () => console.log('Listening on port 3000'));




