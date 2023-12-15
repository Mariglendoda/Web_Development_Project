const express = require('express');

const app = express();

app.get('/', function (request, response) {
  response.send('<h1>My first express app</h1>');
});

app.get('/restaurants', function (request, response) {

});

app.listen(3000, () => console.log('Listening on port 3000'));




