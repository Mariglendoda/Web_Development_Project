import path from 'path';
import fs from 'fs';

const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

function getStoreRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  
  return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  getStoreRestaurants: getStoreRestaurants,
  storeRestaurants: storeRestaurants
}