#!/usr/bin/env node
let fs = require("fs")
let path = require ("path")
const readdirp = require('readdirp');

const mdLinks = () => {
// Validar si input valid.  QUESTION: por que no funciona?
// const isValidPath = (path) => {
//   if (!isValid(path)) {
//     console.error('\x1b[31m%s\x1b[0m', `${path} is not a valid path\n`);
//     return false;
//   }
//   return true;
// }
// //DONE validar si es archivo o carpeta
let path = process.argv[2];
fs.lstat(path, (err, stats) => {
  if(err)
    return console.log(err); //Handle error
    console.log(`Is file: ${stats.isFile()}`);
    console.log(`Is directory: ${stats.isDirectory()}`);
});
// Read content of file and print it  QUESTION: Como usar path like linea 9 index.js
  let files = process.argv[2]
  fs.readFile(files, 'utf8', (err, data) => {
  if (err) throw err;
    // console.log(data);  
    console.log(data);  
    return data 
    })
}
mdLinks()

//filtrar por extension 
//TODO: LOOK FOR A BETTER FUNCTION IN DOCUMENTATION 
const readIt = () => {
readdirp('.', {fileFilter: '*.md', alwaysStat: true})
  .on('data', (entry) => {
    const {path, stats: {size}} = entry;
    console.log(`${JSON.stringify({path, size})}`);
  })
// Optionally call stream.destroy() in `warn()` in order to abort and cause 'close' to be emitted
  .on('warn', error => console.error('non-fatal error', error))
  .on('error', error => console.error('fatal error', error))
  .on('end', () => console.log('done'));
}
readIt()






