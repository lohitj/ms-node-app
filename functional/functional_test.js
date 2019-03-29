var request = require('request');
request('http://localhost:8079', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
  else{
	  throw error;
  }
});
