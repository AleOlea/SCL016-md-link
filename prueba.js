const http = require('http');
const fs = require("fs")
const requestListener = function (req, res) {
  res.writeHead(200);
  // res.end("hola !!!");
  // res.end("hola !!!");
  //res.end([data] ["utf8"]
  //The res.end() function is used to end the response process
  //read a file
  fs.readFile("./prueba.js", "utf8", (err, data)=>{
    if (err){
      console.log(err)
    } else {
      // console.log(data)
      res.end(data);
    } 
  })
}

const server = http.createServer(requestListener);
server.listen(8080);