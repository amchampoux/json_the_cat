const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const API = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(API, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length > 0) {
      callback(null, data[0].description);
    } else {
      callback('Breed not found, sorry, miawwwwww', null);
    }
  });
};
fetchBreedDescription('Siberian', (error, description) => {
});

module.exports = { fetchBreedDescription };




