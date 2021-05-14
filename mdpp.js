#!/usr/bin/env node
let fs = require("fs")
let path = require ("path")
const readdirp = require('readdirp');

const mdLinks = () => {
let path = process.argv[2];
if(!path){
  console.log("please write a valid path")
}


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

 