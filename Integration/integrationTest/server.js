// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/tasks');
var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4},
    description: { type: String, required: true, minlength: 8}
   })
   mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'User'
   var Task = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;

// Routes
// Root Request
app.get('/', function(req, res) {

  Task.find({}, function(err, tasks) {
    
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous 
    // Make sure you handle the case when there is an error, as well as the case when there is no error
  })
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('main');
})
// Add User Request 
app.post('/tasks', function(req, res) {
    console.log("POST DATA", req.body);
    
    // create a new User with the name and age corresponding to those from req.body
    var task = new Task({title: req.body.title, description: req.body.description});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    task.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err){
            console.log(err);
            res.render('main', {errors: task.errors})
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a task!');
            Task.find({}, function(err, tasks) {
              })



            res.render('tasks', {Task});
          }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
