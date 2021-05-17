let fs = require("fs")
let path = require ("path")
let files = process.argv[2]

const mdLinks = () => {

const ext = path.extname(files)
console.log("The extension is gui gui gui:", ext)
  if(ext === ".md"){
    console.log("wow")

new Promise
  ((resolve, reject) => {
    fs.readFile(files, "utf8", (err, data) => {
      if(err) {
        reject(err)
    } else {
      console.log("Bueno, aqui esta el contenido de tu carpeta:")
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
} else {
  console.log("no md files here!")
}
}
mdLinks()