/*
GoodData "GoodJS" 2014
Basic scraping tool. Uses request to get the data and cheerio to parse the text.

Requires Open CV 2.3.1
	>> Install with HOMEBREW (OS X):
	>> brew tap homebrew/science
	>> brew update
	>> brew install opencv

*/

var cv = require('opencv');

cv.readImage("./assets/jandw.jpg", function(err, im){
  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
    for (var i=0;i<faces.length; i++){
      var x = faces[i]
      im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
    }
    im.save('./assets/faces.jpg');
  });
});