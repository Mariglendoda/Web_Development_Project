const fs = require('fs');

const path = require('path');

// Install all packages
const express = require('express');
const uuid = require('uuid');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


// Home page
app.get('/', function (req, res) {
  // Adding the EJS template engine
  // const htmlFilePath = path.join(__dirname, 'views', 'index.html');
  // res.sendFile(htmlFilePath);
  
  res.render('index');
});


// Restaurants page
app.get('/restaurants', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
  // res.sendFile(htmlFilePath);
  
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  
  res.render('restaurants', {numbersOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants});
});


app.get('/restaurants/:id', function (req, res) {
  const restaurantId = req.params.id;
  
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  
  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurant-detail', {restaurant: restaurant});
    }
  }
  
  res.render('error');
});

// Recommend page
  app.get('/recommend', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
    // res.sendFile(htmlFilePath);
    
    res.render('recommend');
  });
  
  app.post('/recommend', function (req, res) {
    const restaurant = req.body;
    const restaurantId = uuid.v4();
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    
    storedRestaurants.push(restaurant);
    
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    res.redirect('/confirm');
});


// Confirm page
app.get('/confirm', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
  // res.sendFile(htmlFilePath);
  
  res.render('confirm');
});


// About page
app.get('/about', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'about.html');
  // res.sendFile(htmlFilePath);
  
  res.render('about');
});

app.use(function (req, res) {
  res.render('error');
});

app.use(function (error, req, res, next) {
  res.render('500');
});

app.listen(8080, () => console.log('Listening on port 8080'));




