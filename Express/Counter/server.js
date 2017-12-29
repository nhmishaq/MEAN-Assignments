var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended : true}));

app.use(session({secret: '89a01414548a2e3086e050c5e4d180d6'}));  // string for encryption      
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('main', {counter: addOneToCounter(req) });
});
// route to process new user form data:
app.post('/increment', (req, res) => {
    addOneToCounter(req);
    res.redirect('/');
});

app.post('/reset', (req, res)=> {
    req.session.destroy();
    res.redirect('/');
});

function addOneToCounter(req){
    return req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
}

app.listen(8000, function() {
    console.log("listening on port 8000");
  })