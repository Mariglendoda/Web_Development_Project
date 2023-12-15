const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));

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


app.post('/recommend', (request, response) => {
  const restaurantName = request.body.name;
  const restaurantAddress = request.body.address;
  const restaurantCuisine = request.body.cuisine;
  const restaurantWebsite = request.body.website;
  const restaurantDescription = request.body.description;

  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storeRestaurantData = JSON.parse(fileData);

  storeRestaurantData.push({
    restaurantName: restaurantName,
    restaurantAddress: restaurantAddress,
    restaurantCuisine: restaurantCuisine,
    restaurantWebsite: restaurantWebsite,
    restaurantDescription: restaurantDescription
  });
  fs.writeFileSync(filePath, JSON.stringify(storeRestaurantData));

  response.redirect('/confirm');
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




