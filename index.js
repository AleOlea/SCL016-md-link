// esto si funciona, la cambie para incorporar el flow if md
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
// mdLinks()
module.exports = mdLinks;



//Preguntar a Sergio
//esta es la version que me recomendó la Ely tiene el path en cli pero no me funcionaba con el if md
// let fs = require("fs")
// let path = require ("path")

// // Read the file and print content to the console
// const mdLinks = (path) => {


// new Promise
//   ((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if(err) {
//         reject(err)
//     } else {
//       console.log("Bueno, aqui esta el contenido de tu carpeta:")
//       resolve(data)
//       return data  
//       }
//     })
//   })
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err)
// })
// }