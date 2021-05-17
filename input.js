let fs = require("fs")
let path = require ("path")
let files = process.argv[2]
let resolve = require('path').resolve
const isValid = require('is-valid-path');

const validateInput = () => {
//file exists
fs.access(files, fs.F_OK, (err) => {
  if (err) {
    console.error("File does not exists")
    return
  }
  console.log("File exists")
})
//Returns true if file path does not contain any invalid characters or empty
const isValIn = isValid(files)
console.log("Is valid File")
//path is absolute?
const isAbs = path.isAbsolute(files)
console.log("path is absolute?:", isAbs)
if (!path.isAbsolute(files)){
//make it absolute
const makeItAbs = resolve(files)
files = makeItAbs
console.log("now it is abs", makeItAbs)
 } else {
   console.log("already absolute")
 }
 return isAbs
}
// validateInput()

module.exports = validateInput;


