//impotr http module and store it's reference into http
const { log } = require('console');
let http = require('http');
let count =0;

//creat server 
let server = http.createServer(function(request,response){
    //this anonyms function will run for each and every request received by node.js server

    count = count + 1;
    console.log('I have received request.',count);

});
//creat variable to store port no

const portno = 5000; //read only variable (constant)
//server run
server.listen(portno);
//how to send reqest on server
//open browser
//then copy paste below text into addressbar
//http://localhost:5000;
console.log('read to accept request on',portno);

