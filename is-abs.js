let fs = require("fs")
let path = require ("path")
let files = process.argv[2]
let resolve = require('path').resolve

const validateInput = () => {
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
console.log("path is abs:", isAbs)
if (path.isAbsolute(files) === false){
//make it absolute
const makeItAbs= resolve(files)
console.log("make-it-abs", makeItAbs)
 } else {
   console.log("is allright")
 }
}
validateInput()