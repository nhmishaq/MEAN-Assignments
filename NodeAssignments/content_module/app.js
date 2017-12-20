var http = require('http');
var fs = require('fs');
var static_contents = require('./carsAndCats.js');

const server = http.createServer((request, response) => {
    static_contents(request, response);
});

server.listen(7077);
console.log('Running in localhost at port 7077');