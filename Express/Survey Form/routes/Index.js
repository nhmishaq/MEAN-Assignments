module.exports = function Route(app){
    // root route to render the index.ejs view
    


    app.get('/', function (req, res){
        res.render('main', {'counter': req.session.counter++} );
    });
    // route to process new user form data:
    
    app.post('/result', function (req, res){  
        var result = {
            name: req.body.name,
            location: req.body.location,
            language: req.body.language,
            comments: req.body.comments
        }
        res.render('results', {'data' : result});
    })
}