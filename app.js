const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

// Home page
app.get('/', function (req, res) {
  res.render('index');
});


// Restaurants page
app.get('/restaurants', function (req, res) {
  res.render('restaurants');
});


// Recommendations page
app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  
  storedRestaurants.push(restaurant);
  
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  
  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/about', function (req, res) {
  res.render('about');
});

// Confirmation page
app.get('/confirm', function (req, res) {
  res.render('confirm');
});



// About page
app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(8080, () => console.log('Listening on port 8080'));




