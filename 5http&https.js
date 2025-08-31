// const http = require('http');
// const server = http.createServer(function(req,res){
//     res.end("hello world");
// })
// server.listen(3000);
//iss code se server chl rha hai and that check on browser


const http = require('http');
const server = http.createServer(function(req,res){
    res.end("hello");
})
server.listen(3000);