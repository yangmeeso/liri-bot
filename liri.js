// var Twitter = require('twitter');
var twitterConfig = require('./keys.js');
console.log(twitterConfig);

var commands = process.argv[2]
var movieName = process.argv[3]

var params = {screen_name: 'nodejs', count: 20};

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl)

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//  if (!error && commands === 'my-tweets') {
//    console.log(JSON.parse(tweets));
//  }
// });






// client.get(path, params, callback);

// client.get('favorites/list', function(error, tweets, response) {
//     if(error) throw error;
//     console.log(tweets);  // The favorites. 
//     console.log(response);  // Raw response object. 
//   });
