const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

var people = [{name: "bob"},{name: "judy"},{name: "smith"},{name:"carlos"}];

router.get('/', function (req, res) {
	let tweets = tweetBank.list();
	// let people = tweets.map(function(tweet) {
	// 	return tweet.name;
	// })
	res.render( 'index', { tweets: tweets } );
});

module.exports = router;