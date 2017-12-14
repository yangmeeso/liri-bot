var Twitter = require('twitter');

var client = new Twitter({
 consumer_key: '6NO5qbF1eVdA1RrQRV7D9X3fY',
 consumer_secret: '1sPoGD3g1PorYdRUCJNusuePHKCzMNlzvHJ8bMrOzetFGU6ULJ',
 access_token: '938586660240945152-RI2KWGuaFQ7kPiFM00LCRt7HOrF6q1S',
 access_token_secret: 'Lje8bMKLYiPbq8arY3bsQlKVX28BG805cY6d1rn4e0sUb'
});

// var client = new Twitter({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
//   });

module.exports = client;