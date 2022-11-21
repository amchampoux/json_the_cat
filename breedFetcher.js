const request = require('request');
const myArgs = process.argv.slice(2);
const API = 'https://api.thecatapi.com/v1/breeds/search?q=' + myArgs[0];

request(API, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found, sorry, miawwwwww');
  }
});




