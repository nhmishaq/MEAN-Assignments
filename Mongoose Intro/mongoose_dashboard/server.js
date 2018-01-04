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


var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    region: {type: String, required: true, minlength: 2},
    species: {type: String, required: true, minlength: 2}
   }, {timestamps: true});

mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal');

// Routes
// GET '/' Displays all of the mongooses.
app.get('/', function(req, res) {
Animal.find({}, function(err, results) {
    if(err) {
        console.log(err);
    } 
    res.render('index', {animals: results} );  
    })
})

// GET '/mongooses/new' Displays a form for making a new mongoose.
app.get('/new', function(req, res) {
    Animal.find({}, function(err, animals) {
        if(err) {
            res.render('new', {errors: animals.errors})
        } else { 
          res.render('new', {animals: animals});
        }
      })
})

// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
//Create
app.post('/mongooses', function(req, res) {
    console.log("POST DATA", req.body);
    Animal.create(req.body, function(err, result) {
        if (err){
            console.log(err);
        }
        res.redirect('/');
      })      
})

//Show
// GET '/mongooses/:id' Displays information about one mongoose.
app.get('/mongooses/:id', function(req, res) {
    Animal.find({ _id: req.params.id}, function(err, animals) {
        if(err) {
            console.log(err);
        } else { 
          res.render('displayOne', { animals: animals[0] } );
        }
      })
})



// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
app.post('/mongooses/:id', function(req, res) {
    Animal.find({_id: req.params.id}, function(err, response) {
        if (err){
            console.log(err);
        }
        res.render('edit', {animal: response[0]})
    })
})



//POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
//Update
app.post('/mongooses/edit/:id', function(req, res) {
    Animal.update({_id: req.params.id }, req.body,  function(err){
        if (err){
            console.log(err);
        }
        res.redirect('/');
    })
})


// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
//Destroy
app.post('/mongooses/destroy/:id', function(req, res) {
    Animal.remove({_id: req.params.id }, function(err, result){
        if (err){
            console.log(err);
        }
        res.redirect('/');
    })
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
