// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render("index");
  })
}

var users = require('../controllers/users.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index')
  })
  app.post('/users', function(req,res){
    users.create(req, res)
    //tryna log my boy
    console.log(users);
  })
  app.get('/main', function (req, res) {
    users.show(req, res)
  })
  app.post('/login', function (req, res) {
    users.show(req, res)
  })
}