const fs = require("fs");
const path = require('path');
let files = process.argv[2];



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

// THIS IS WORKING FINE:Read a directory and print content to the console
// THIS IS WORKING FINE:Read a directory and print content to the console

// const mdLinks = () => {
// new Promise 
// ((resolve, reject) => {
//   fs.readdir(files, 'utf8', (err, data) => {
//   if (err) {throw err;} else {resolve (data)}
//     // console.log(data);  
//     console.log(data);  
//     return data 
//     })
    
//   })
// }

// mdLinks()

