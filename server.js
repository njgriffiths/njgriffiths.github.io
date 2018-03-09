var port = 3005;
var express = require('express');

var app = express();

app.use(express.static('./'));

app.listen(port, function() {
	console.log('Express server is up on port ' + port);
});