let fs = require("fs")
let path = require ("path")
let files = process.argv[2]
let resolve = require('path').resolve
const isValid = require('is-valid-path');

const validateInput = () => {

//Returns true if a file path does not contain any invalid characters or is empty
const isValIn = isValid(files)
console.log("nada raro")

//file exists
fs.access(files, fs.F_OK, (err) => {
  if (err) {
    console.error("file does not exists")
    return
  }
  console.log("file exists")
})
//path is absolute?
const isAbs = path.isAbsolute(files)
console.log("path is absolute?:", isAbs)
if (path.isAbsolute(files) === false){
//make it absolute
const makeItAbs= resolve(files)
console.log("MAKE IT ABS:", makeItAbs)
 } else {
   console.log("already absolute")
 }
 return isAbs
}
// validateInput()

module.exports = validateInput;


