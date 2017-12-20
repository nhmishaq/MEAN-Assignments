var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended : true}));

app.use(session({secret: '89a01414548a2e3086e050c5e4d180d6'}));  // string for encryption      
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('main', {'counter': req.session.counter++} );
});
// route to process new user form data:

app.post('/result', function (req, res){  
    var result = [
        {name: req.body.name},
        {location: req.body.location},
        {language: req.body.language},
        {comments: req.body.comments}
    ]
    res.render('results', {'result' : result});
});


app.listen(8000, function() {
    console.log("listening on port 8000");
  })