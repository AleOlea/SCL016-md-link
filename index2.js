let fs = require("fs")
let path = require("path")
const marked = require("marked");
const fetch = require("node-fetch");


/* extracts md */
let readMd = (files) => {
const ext = path.extname(files)
return new Promise((resolve, reject) => {
  if (ext != '.md') {
    reject('no md file here!')
  } else {
/* reads md file */
fs.readFile(files, "utf8", (err, data) => {
  if (err) {
    reject(err.message)
  } else {
  resolve(data)
  }
    })
  }
  })
}

/* get the links */
let extracLinks = (dataFile, file) => {
  return new Promise((resolve, reject) => {
  const arrayLinks = [];
  let render = new marked.Renderer();
    render.link = function (href, title, text) {
    const linkElements = {
    href,
    text,
    file
    };
  arrayLinks.push(linkElements);
    return arrayLinks
    };
  marked(dataFile, {
  renderer: render
  })
  if (arrayLinks.length == 0) {
      reject('no links founded')
    } else {
      resolve(arrayLinks)
    }
  })
}

/* http request */
let validaUrl = (resLinks) => {
let linksPromises = Array()
resLinks.forEach(url => {
linksPromises.push(
  new Promise(
    (resolve, reject) => {
    fetch(url.href)
    .then(resp => {
      url.status = resp.status
      url.ok = resp.ok ? 'ok' : 'fail'
      resolve(url)
        })
      }
    )
  )
  })
  return linksPromises;
}

/* options */
let mdLinks = (path, options) => {

return new Promise((resolve, reject) => {
if (path === undefined) {
      reject('no input file specified')
    }
if (options.length === 0) {
      reject('no arguments specified')
    }

readMd(path)
  .then(res => { // res contiene la lectura del archivo => path
  extracLinks(res, path) // extraemos links
  .then(resLinks => { // arreglo con enlaces
  if (options.validate != undefined) { /// primera parte donde solo lee el archivo
  switch (options.validate) {
    case true:
    let result = validaUrl(resLinks);
    Promise.all(result).then( // esperamos hasta que todas las promesas sean resueltas
    allProm => resolve(allProm)
      )
    break;
    case false:
    resolve(resLinks)
    break;
    default:
    reject('opción indicada no válida')
    break;
      }
    } else { // segunda parte del ejecicio donde se pasar paramtros
    let opt = Object.values(options)
      if (opt.length > 0) {
      let result = validaUrl(resLinks);
      let stats = {
      Total: 0,
      Unique: 0,
      Broken: 0
        }
    let respRes = Array()
    opt.forEach(elem => {
      switch (elem) {
      case '--validate':
      Promise.all(result).then(
      allProm => {
      allProm.forEach((prom, i) => {
      stats.Broken = prom.ok == 'fail' ? parseInt(stats.Broken) + 1 : stats.Broken
      respRes.push(Object.values(prom).join(' '))
      })
      console.log(respRes)//TODO
      }
        )
      break
      case '--stats':
      Promise.all(result).then(
      allProm => {
      let unicos = [...new Set(respRes)]
      stats.Total = allProm.length
      stats.Unique = unicos.length - allProm.length
      console.log(stats) // TODO
        }
      )
      break
      }
      })
      } else {
      reject('sin opciones')
        }
      }
    })
      .catch(errLinks => reject(errLinks))
      })
      .catch(err => reject(err))
  });
}

module.exports = mdLinks;
