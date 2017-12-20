module.exports = function (request, response) {
    var fs = require('fs');
    var http = require('http');
    console.log(`Client request URL: ${request.url}`);

    if(request.url === '/cars') {
        fs.readFile('./Views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('./Views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('Views/newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }

   else if(request.url === '/images/sexysentra.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/sexysentra.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/sentra.jpeg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/sentra.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/huh.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/huh.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
// tell your server which port to run on
// print to terminal window
console.log("Running in localhost at port 7077");
};