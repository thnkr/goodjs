/*
GoodData "GoodJS" 2014
Uses Blockchain API to create a bitcoin wallet.
*/
var request = require('request');

var options = {
	key: '2d6f8697-aa16-4d62-a8ae-ce03f4e92156', // <-- Change the last integer (6) to a five.
	email: 'paul@yahoo.com',
	password: '12345678910'
}

var root = 'https://blockchain.info/api/v2/create_wallet?api_code=',
	url = root+options.key+'&email='+options.email+'&password='+options.password;

request(url, function(err, response, body){
	if(err){console.log(err)};
	console.log('Wallet: '+body);
});

