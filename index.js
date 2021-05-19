let fs = require("fs")
let path = require ("path")
const marked = require("marked");
let files = process.argv[2]

const mdLinks = () => {
const ext = path.extname(files)
  console.log("1.-File extension is:", ext)
  if(ext === ".md"){
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
      console.log("2.", arrayLinks)
      console.log("3.-", data)
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
  console.log("4.- no md files here!")
  
}
return mdLinks
}
// mdLinks()
module.exports = mdLinks;

