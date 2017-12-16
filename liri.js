var request = require('request');
var Twitter = require('twitter');
var config = require('./keys.js');
var commands = process.argv[2];
var movieName = process.argv[3];
var params = {
    screen_name: 'mesoy_liri', // Twitter ID
    count: 20,
    exclude_replies: true,
    tweet_mode: 'extended'
};

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + config.omdbKey.apiKey;

function fetchTweet() {
    var client = new Twitter({
        consumer_key: config.twitterKey.consumer_key,
        consumer_secret: config.twitterKey.consumer_secret,
        access_token_key: config.twitterKey.access_token_key,
        access_token_secret: config.twitterKey.access_token_secret
    });
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (commands === "my-tweets") {
            console.log("------------------------");
            // console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                console.log("Time: " + tweets[i].created_at + "\nTweets: " + tweets[i].full_text);
            }
        }
        else if (error) {
            console.log("fetchTweet error")
        }
      });

};
fetchTweet();

function fetchMovie() {
    request(queryUrl, function (error, response, body) {
        if (commands === "movie-this") {
            // console.log(JSON.parse(body));
            console.log(movieName);
            console.log("------------------------")
            console.log("Title of Movie: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Country: " + JSON.parse(body).Language);
            console.log("Country: " + JSON.parse(body).Plot);
            console.log("Country: " + JSON.parse(body).Actors);        
        }
        else if (error) {
            console.log("fetchMovie error");
        }
    })
};
fetchMovie();