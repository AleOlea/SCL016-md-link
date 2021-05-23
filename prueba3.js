let fs = require("fs")
let path = require ("path")
const marked = require("marked");
let files = process.argv[2]
// const readline = require('readline');

// AQUI ESTOY PROBANDO FUNCIONES//

const mdLinks = () => {
const ext = path.extname(files)
  console.log("The extension is:", ext)
    if(ext === ".md"){
    console.log("md extension founded")
new Promise
  ((resolve, reject) => {
    fs.readFile(files, "utf8", (err, data) => {
      if(err) {
        reject(err)
    } else {
      resolve(data)
      const arrayLinks = [];
      let render = new marked.Renderer();
      render.link = function(href, title, text) {
        const linkElements = {
          href,
          text,
          file: files,
        };
        arrayLinks.push(linkElements);
      };
      marked(data, {
        renderer: render
      })
      console.log(arrayLinks)
      console.log(data)
      return data  
      }
    })
  })
.then(data => {
  // console.log(data)
})
.catch(err => {
  console.log(err)
})
} else {
  console.log("no md files here!")
  }
}
mdLinks()


//Leer linea por linea
// const rl = readline.createInterface({
//   input: fs.createReadStream(files),
//   crlfDelay: Infinity
// });
// rl.on('line', (line) => {
//   console.log(`Line from file: ${line}`);
//   if (line.includes("https:/" || "a")){
//     console.log("Es lo máximo")
//   }
// });










