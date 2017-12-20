var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose');

// Use native promises
mongoose.Promise = global.Promise;


var MongooseSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 6},
    region: {type: String, required: true, minlength: 6},
    species: {type: String, required: true, minlength: 6}
   }, {timestamps: true});

   mongoose.model('Mongoose', MongooseSchema); // We are setting this Schema in our Models as 'User'
   var Mongoose = mongoose.model('Mongoose')

// Routes
// Root Request
app.get('/', function(req, res) {
    Mongoose.find({}, function(err, mongoose) {
        if(err) {
            res.render('index', {errors: mongoose.errors})
        } else { 
        console.log('here is the mongoose');
        console.log(mongoose);

        console.log('here is the Mongoose');
        console.log(Mongoose);
          res.render('index', {Mongoose: mongoose});
        }
      })
})

//insert a new mongoose into db
app.post('/mongooses', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var mongoose = new Mongoose(req.body);

    mongoose.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            res.redirect('/')
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a mongoose!');
          res.redirect('/');
        }
      })      
})



// db.collectionName.update ( {name: mongoose.name}, {name: req.body.name} )



//updates existing mongoose
// app.post('/mongooses', function(req, res) {
//     console.log("POST DATA", req.body);
//     // This is where we would add the user from req.body to the database.
//     var mongoose = new Mongoose(req.body);
//     if (){

//     }
//     mongoose.save(function(err) {
//         // if there is an error console.log that something went wrong!
//         if(err) {
//             res.redirect('/')
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully added a mongoose!');
//           res.redirect('/');
//         }
//       })      
// })



//display all mongooses on /mongoose page
app.get('/mongooses', function(req, res) {
    Mongoose.find({}, function(err, mongooses) {
        if(err) {
            res.render('new', {errors: mongooses.errors})
        } else { 
        //   console.log('successfully added a user!');
          res.render('new', {mongooses: mongooses});
        }
      })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
