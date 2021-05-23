let fs = require("fs")
const fetch = require('node-fetch');
const mdLinks = require("./index.js");
const input = mdLinks(process.argv[2])
const marked = require("marked");

//FUNCIONANDO BIEN//

const arrOpts = process.argv.slice(3, 5);

if (process.argv[2]){
  console.log("Default", process.argv[2])
}

if (arrOpts.includes("--stats")){
  console.log("stats")
}
//working validate//
if (arrOpts.includes("--validate")){
  console.log("validate")
  
}

if (arrOpts.includes("--stats") && arrOpts.includes("--validate")){
  console.log("stats & validate")
}


// HTTP REQUEST USING NODE FETCH






 













