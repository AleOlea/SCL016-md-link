let fs = require("fs")
let path = require ("path")
const marked = require("marked");
const fetch = require("node-fetch")
let files = process.argv[2]

linksFn = (lk) => {
  console.log(lk)
}

const mdLinks = () => {
//Get extension 
const ext = path.extname(files)
  console.log("1.-Extension:  ", ext)
  if(ext === ".md"){
//Read File
  new Promise
    ((resolve, reject) => {
    fs.readFile(files, "utf8", (err, data) => {
      if(err) {
        reject(err)
    } else {
    resolve(data)
//Get links
const arrayLinks = [];
let render = new marked.Renderer();
  render.link = function(href , title, text) {
const linkElements = {
href, 
text, 
file: files,
  };
arrayLinks.push(linkElements);
  return arrayLinks
  };
  marked(data, {
  renderer: render
  })
  console.log("2.- LINKS ENCONTRADOS SON:", arrayLinks)
  
  arrayLinks.forEach((l) => {
    fetch(l.href)
    .then( res => console.log(res.ok, '=> ', res.status,' => ', res.statusText)) // por medio del res.XXX puedes acceder a los valores del json de respuesta.
  })
  // console.log("3.-", data)//comentado para trabajar con options
  return data 
    }
  })
})
.then(data => { 
})
.catch(err => {
  console.log(err)
})
} else {
  console.log("4.- no md files here!") 
}


return mdLinks
}
// mdLinks()
module.exports = mdLinks;








