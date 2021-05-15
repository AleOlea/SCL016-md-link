let fs = require("fs")
let path = require ("path")

// Read the file and print content to the console
const mdLinks = (path) => {

new Promise
  ((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if(err) {
        reject(err)
    } else {
      console.log("Aqui esta el contenido de tu carpeta:")
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