// var Twitter = require('twitter');
var request = require('request');
var Twitter = require('twitter');
var config = require('./keys.js');
var commands = process.argv[2];
var movieName = process.argv[3];

var params = {
    user_id: "mesoy_liri",
    screen_name: 'nodejs', 
    count: 20,
    exclude_replies: true,
    tweet_mode: 'extended'
};

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + config.accesKey.omdbKey;

function fetchTweets () {
    var client = new Twitter({
        consumer_key: config.accessKey.twitterKey.consumer_key,
        consumer_secret: config.accesKey.twitterKey.consumer_secret,
        access_token_key: config.accessKey.twitterKey.access_token_key,
        access_token_secret: config.accessKey.twitterKey.access_token_secret
    })
};

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

request(queryUrl, function fetchMovie(error, response, body) {
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
    else {
        console.log("error");
    }
});