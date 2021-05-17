let fs = require("fs")
let path = require ("path")
const readline = require('readline');
let files = process.argv[2]

const mdLinks = () => {

const ext = path.extname(files)
console.log("The extension is:", ext)
  if(ext === ".md"){
    console.log("wow")

new Promise
  ((resolve, reject) => {
    fs.readFile(files, "utf8", (err, data) => {
      if(err) {
        reject(err)
    } else {
      // console.log("Bueno, aqui esta el contenido de tu carpeta:")
      resolve(data)
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


// Extract and save links from .md file in an array
const getLinks = (nodelist, file) => {
  const arrLikns = Array.from(nodelist).map((element) => {
    const obj = {};
    if (element.getAttribute('href').indexOf('http') === 0) {
      obj.text = element.textContent;
      obj.href = element.getAttribute('href');
      obj.file = file;
    }
    return obj;
  });
  return arrLikns.filter((element) => element.text !== undefined);
};
// validar links de array
const validateLinks = (arrLikns) => {
  const arr = arrLikns.map((obj) => fetch(obj.href)
    .then((url) => ({ status: url.status, message: url.statusText, ...obj }))
    .catch(() => ({ status: 500, message: 'Internal Server Error', ...obj })));
  return Promise.all(arr);
};


const rl = readline.createInterface({

  input: fs.createReadStream(files),
  crlfDelay: Infinity
});
let re = /\[([^\]]*)\]\(([^\)]+)\)/g;
rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
  if (line.includes("https:/" || "a")){
    console.log("Es lo máximo")
  }
  
  
});



// async function processLineByLine() {
//   const fileStream = fs.createReadStream(files);

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.

//   for await (const line of rl) {
//     // Each line in input.txt will be successively available here as `line`.
//     console.log(`Line from file: ${line}`);
//   }
// }

// processLineByLine();







