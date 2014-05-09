/*
GoodData "GoodJS" 2014
Basic scraping tool. Uses request to get the data and cheerio to parse the text.
*/

var request = require('request');
var cheerio = require('cheerio');

request(url, function(err, status, body){

	$ = cheerio.load(body);
	$('a').each(function(){
		$(this).text();
	});

});