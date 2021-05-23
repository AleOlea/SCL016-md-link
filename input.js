let fs = require("fs")
let path = require ("path")
let resolve = require('path').resolve
const isValid = require('is-valid-path');
let files = process.argv[2]

const validateInput = () => {
fs.access(files, fs.F_OK, (err) => {
  if (err) {
    console.error("File does not exists")
    return
  }
  console.log("File exists")
})
//Returns true if any invalid characters or if empty
const isValIn = isValid(files)
console.log("Is valid File")
//path is absolute?
//TO-DO esto deberia ser una función?
const isAbs = path.isAbsolute(files)
console.log("path is absolute?:", isAbs)
if (!path.isAbsolute(files)){
//make it absolute
const makeItAbs = resolve(files)
files = makeItAbs
console.log("Path made abs =>", makeItAbs)
 } else {
   console.log("Is already absolute")
 }
 return validateInput
}
// validateInput()

module.exports = validateInput;


