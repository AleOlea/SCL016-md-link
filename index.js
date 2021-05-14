let fs = require("fs")
let path = require ("path")

//Read a file and print content to the console
const mdLinks = (path) => {

  fs.readFile( path, "utf8", (err, data) => {
    if(err) {
      console.log("error: ", err)
      //return
    } else {
      console.log(data)
      return data  
    }
  })
};

module.exports = mdLinks;

