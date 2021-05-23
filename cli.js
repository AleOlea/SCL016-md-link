#!/usr/bin/env node
const mdLinks = require("./index.js");
const validateInput = require("./input")

const validInput = validateInput()
// const input = mdLinks(process.argv[2])
const input = (process.argv[2])
//hasta aqui control zeta

const arrOpts = process.argv.slice(3, 5);
//si solo path identificar archivo md-imprimir links con ruta y texto.(const arrayLinks)
if (input && arrOpts.includes("")){
  console.log("Input is: ", input)
}

if (arrOpts.includes(input && "--stats")){
  // const inp = mdLinks()
  console.log(input + "--stats" )
 //QUIERO IMPRIMIR cantidad total de links en array links necesito funcion de aaray links para traer aqui
}
//Hacer peticion http para chequear links
if (arrOpts.includes("--validate")){
  const inp = mdLinks()
  console.log(input + "validate") 
}

if (arrOpts.includes("--stats" && "--validate")){
  console.log("stats & validate")

  //DAR ESTADISTICAS DE TOTAL, UNIQUE AND BROKEN
  //NECESITO EL LARGO DEL ARRAY
  //NECESITO CONTAR LAS OK
  //NECESITO CONTAR LAS BROKEN
}


