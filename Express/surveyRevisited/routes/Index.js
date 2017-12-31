module.exports = function Route(app, server){

    var io = require('socket.io').listen(server) 
    
    // root route to render the index.ejs view
    app.get('/', function (req, res){
        res.render('main');
    });
    // route to process new user form data:
    // app.post('/result', function (req, res){  
    //     var result = {
    //         name: req.body.name,
    //         location: req.body.location,
    //         language: req.body.language,
    //         comments: req.body.comments
    //     }
    //     res.render('results', {'data' : result});
    // })


    io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
	 	socket.on("posting_form", function (data){
	 		//generate a random number
	 		var random_number = Math.floor((Math.random() * 1000) + 1);
		  //will emit the data to the client
		  socket.emit('updated_message', {response: data}); 
			socket.emit('random_number', {response: random_number}); 
		})
	})
}