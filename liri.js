// var Twitter = require('twitter');
var request = require('request');
var Twitter = require('twitter');
var config = require('./keys.js');

// var commands = process.argv[2]
var commands = process.argv[2];
var movieName = process.argv[3];

var params = {screen_name: 'nodejs', count: 20};

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=81d6b13";
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
    if (commands === "movie-this") {
        // console.log(JSON.parse(body));
        console.log(movieName);
        console.log("------------------- MOVIE SEARCH RESULT -------------------")
        console.log("Title of Movie: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Country: " + JSON.parse(body).Language);
        console.log("Country: " + JSON.parse(body).Plot);
        console.log("Country: " + JSON.parse(body).Actors);        
    }
});

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
