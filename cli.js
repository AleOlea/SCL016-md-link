#!/usr/bin/env node
const mdLinks = require("./index.js");
const validateInput = require("./input")
// const pathMd = require ("./path.js")//que nombre se le pone a este const el de la función de origen u otro?

//mi primer codigo
// const validInput = validateInput()
// console.log(process.argv)
const input = mdLinks(process.argv[2])
const arrOpts = process.argv.slice(3, 5);
console.log(arrOpts)




// const input = (process.argv[2])//para usarlo en el ciclo if junto a const inp = mdLinks() para que se ejecute la funcion.
// mdLinks()
//   const inp = mdLinks()

//Caso 1
if(!input){
	console.log("Error no hay archivo que procesar");
}
//Caso 2
else if(input && arrOpts.length === 0){
  console.log("hola 2")	 
}
// //Caso 3
else if(input && arrOpts.length === 1 && arrOpts.includes("--stats")){
  console.log("hola 3")	
}
// //Caso 4
else if(input && arrOpts.length === 1 && arrOpts.includes("--validate")){
  console.log("hola 4")	
}
// //Caso 5 y Caso 6
else if(input && arrOpts.length === 2 && arrOpts.includes("--validate") && arrOpts.includes("--stats")){
  console.log("hola 5")
 }



