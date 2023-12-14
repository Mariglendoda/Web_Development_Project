const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('<h1>My first express app</h1>');
});


app.listen(3000, () => console.log('Listening on port 3000'));``