let fs = require("fs")
// const marked = require("marked");
const mdLinks = require("./index.js");
const input = mdLinks(process.argv[2])

//QUIERO QUE SI INGRESO OPCIONES SE HAGAN CIERTAS ACCIONES.//

const arrOpts = process.argv.slice(3, 5);

if (input){
  console.log("input")
}
if (arrOpts.includes("stats")){
  console.log("stats")
}
if (arrOpts.includes("validate")){
  console.log("validate")
}

if (arrOpts.includes("stats") && arrOpts.includes("validate")){
  console.log("stats & validate")
}











