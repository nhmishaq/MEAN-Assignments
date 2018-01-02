var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

// Use native promises
mongoose.Promise = global.Promise;


var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 6},
    quote: {type: String,required: true, minlength: 6}
   }, {timestamps: true});

   mongoose.model('Users', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('Users')


// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index');
})
// Add User Request 
app.post('/quotes', function(req, res) {    
    User.create(req.body, function(err) {
        if (err){
            console.log(err);
        }
        res.redirect('quotes');
    })
})
app.get('/quotes', function(req, res) {
    User.find({}, function(err, users) {
        if (err){
            console.log(err);
        }
        res.render('quotes', {users: users});
      })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
