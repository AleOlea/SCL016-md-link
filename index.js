let fs = require("fs")
let path = require ("path")

// //Read a file and print content to the console
const mdLinks = (path) => {

new Promise
  ((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if(err) {
        reject(err)
    } else {
      resolve(data)
      return data  
    }
    })
  })
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
}


 module.exports = mdLinks;