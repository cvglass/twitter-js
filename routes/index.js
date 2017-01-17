const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

var people = [{name: "bob"},{name: "judy"},{name: "smith"},{name:"carlos"}];

router.get('/', function (req, res) {
	let tweets = tweetBank.list();
	// let people = tweets.map(function(tweet) {
	// 	return tweet.name;
	// })
	res.render( 'index', { tweets: tweets, showForm: true } );
});

router.post('/', function(req, res) {
		let tweets = tweetBank.list();

	// body parser stuff
	res.render('index', { tweets: tweets, showForm: false });
})

router.get('/users/:name', (req, res)=>{
	var name = req.params.name;
	var list = tweetBank.find( {name : name});
	res.render( 'index', { tweets : list});
});




module.exports = router;