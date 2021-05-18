const marked = require("marked");
let files = process.argv[2]
const readline = require('readline');
let fs = require("fs")
let path = require ("path")
const getUrls = require('get-urls');


// const mdLinks = () => {
//   fs.readFile(files, "utf8", (err, data) => {
//     // console.log(data)

//     // const html = marked(data);
//     // const html = marked('# Marked in Node.js\n\nRendered by **marked**.');
    
//   // console.log(html)
//   })
//   }
//   mdLinks()


fs.readFile(files, "utf8", (err, data) => {
  if(err) {
    reject(err)
} else {
  // console.log(data)
  const getIt = getUrls(data);
  console.log(getIt)
  // return data  
  }
})

 
  // const text = 'Lorem ipsum dolor sit amet, //sindresorhus.com consectetuer adipiscing http://yeoman.io elit.';
   
  // const getIt = getUrls(text);
  // console.log(getIt)
 
  //=> Set {'http://sindresorhus.com', 'http://yeoman.io'}
 

  