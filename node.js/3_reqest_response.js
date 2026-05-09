const { log } = require('console');
let http = require('http');

//creat server

let server = http.createServer(function(request,response){
    console.log(request.url); //compulsory

    response.writeHead(200,{"content-type": 'html'});

    if(request.url === '/')
    {
     response.write("<html><body><h1>hello i am home page</h1></body></html>");
    }
    else if(request.url === '/fruits')
    {
     response.write("<html><body><h1><ul><li>apple</li><li>banana</li><li>tomato</li></ul></h1></body></html>");
    } else if(request.url === '/vegetables')
    {
     response.write("<html><body><h1><ul><li>garlic</li><li>potato</li><li>lady-finger</li></ul></h1></body></html>");
    } else if(request.url === '/grains')
    {
     response.write("<html><body><h1><ul><li>wheat</li><li>rise</li><li>corn</li></ul></h1></body></html>");
    }

    else{
        response.write("<html><body><h1>sorry, we dont have any web page</h1></body></html>")
    }

    response.end(); //compulasory




});

//crerat variable to store port no

const portno = 5000;  //read only variable (constant)
//server run
server.listen(portno);
//http://localhost:5000;

console.log('ready to accept request on ',portno);