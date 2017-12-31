var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(session({secret: '89a01414548a2e3086e050c5e4d180d6'}));  // string for encryption      
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})
//we're going to have /routes/index.js handle all of our routing
var route = require('./routes/Index.js')(app, server);