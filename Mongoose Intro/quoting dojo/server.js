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
    quote: {type: Number, min: 1, max: 150}
   }, {timestamps: true});

   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User')


// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users) {

        if(err) {
            res.render('index', {errors: user.errors})
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
          res.render('index', {users: users});
        }

        // This is the method that finds all of the users from the database
        // Notice how the first parameter is the options for what to find and the second is the
        //   callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        //   happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
      })
    // res.render('index', {User: users});
})
// Add User Request 
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user = new User(req.body);

    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            res.render('index', {errors: user.err})
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
          res.render('quotes');
        }
      })    
    
})

app.get('/quotes', function(req, res) {
    User.find({}, function(err, users) {

        if(err) {
            res.render('quotes', {errors: user.errors})
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
          res.render('quotes', {users: users});
        }
      })
    // res.render('index', {User: users});
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
