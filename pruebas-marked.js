const marked = require("marked");
let files = process.argv[2]
const readline = require('readline');
let fs = require("fs")
let path = require ("path")

const mdLinks = () => {
  fs.readFile(files, "utf8", (err, data) => {
    console.log(data)
    const html = marked(data);
    
  console.log(html)
  })
  }
  mdLinks()
