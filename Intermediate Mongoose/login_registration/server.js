//Things to work on:
// 1. connect registration form to db
// 2. Login form


var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/login_reg');

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/login_reg', {
  useMongoClient: true,
  /* other options */
});

// static content
app.use(express.static(path.join(__dirname, './client/static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the user configuration file which does the rest for us
require('./server/config/user.js')

//routes modular link
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
  })