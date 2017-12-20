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
app.post('/increment', function (req, res){
    req.session.counter = req.body.plus2;
    if (req.session.counter){
        req.session.counter += 2;
        console.log(req.session.counter);    
        res.redirect('/');
    }
});

app.post('/reset', function (req, res){
    req.session.reset = req.body.reset;
    req.session.counter = 0;
    console.log(req.session.counter);    
    res.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
  })