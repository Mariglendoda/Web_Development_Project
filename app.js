const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));


// Home page
app.get('/', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'index.html');
  response.sendFile(htmlPath);
});


// Restaurants page
app.get('/restaurants', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'restaurants.html');
  response.sendFile(htmlPath);
});


// Recommendations page
app.get('/recommend', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'recommend.html');
  response.sendFile(htmlPath);
});


// Confirmation page
app.get('/confirm', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'confirm.html');
  response.sendFile(htmlPath);
});


// About page
app.get('/about', function (request, response) {
  const htmlPath = path.join(__dirname, 'views', 'about.html');
  response.sendFile(htmlPath);
});

app.listen(8080, () => console.log('Listening on port 8080'));




