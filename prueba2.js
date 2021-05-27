const fs = require("fs");
const path = require('path');
let files = process.argv[2];

// esta funcion retorna verdadero o false un input es directorio o documento

const isDirOrFile =()=> fs.stat(files, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
let isFile = stats.isFile() //true
let isDir = stats.isDirectory() //false
 console.log("Is a directory?", stats.isDirectory())
 console.log("Is a file?", stats.isFile())

})
isDirOrFile()





