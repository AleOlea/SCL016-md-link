#!/usr/bin/env node
let fs = require("fs")
let path = require ("path")
let files = process.argv[2]



// const parseMyFile = path.parse(files)
// console.log("1.- Please parse my File",parseMyFile)
const pathIsAbs =() => {

const isAbsolute = path.isAbsolute(toString(files))
console.log("1.- The Path is absolute?: ", isAbsolute)
if(isAbsolute!==true){
  console.log("--Vamos a tener que arreglarte!")
const makeItAbsolute = path.join(process.cwd(files))
  console.log("2.- Y ahora?!", makeItAbsolute)
}
return isAbsolute
}
pathIsAbs()


// const extName = path.extname(files)
// console.log("3.- Please, give me the extension:", extName)

// module.exports = isAbsolute;

