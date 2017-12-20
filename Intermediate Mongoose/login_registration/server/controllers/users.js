var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
  show: function(req, res) {
    User.find({}, function(err, users) {
    res.render('main', {users: users});
    })
  },
  create: function(req, res) {
    // Create a new user!
    User.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
},
  new:  function(req, res){
    res.render('main');
  },
  //show
  login: function(req, res){
    User.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('main', { user: response[0] });
    })
  },
}
