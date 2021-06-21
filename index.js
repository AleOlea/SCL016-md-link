const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

/* If is md file read content */
const readMd = (files) => {
  const ext = path.extname(files);
  return new Promise((resolve, reject) => {
    if (ext !== '.md') {
      reject('no md file here!');
    } else {
      /* read md file */
      fs.readFile(files, 'utf8', (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
    }
  });
};

/* analize code and returns an array with links founded in the file */
const extracLinks = (dataFile, file) => new Promise((resolve, reject) => {
  const arrayLinks = [];
  const render = new marked.Renderer();
  render.link = function (href, title, text) {
    const linkElements = {
      href,
      text,
      file,
    };
    arrayLinks.push(linkElements);
    return arrayLinks;
  };
  marked(dataFile, {
    renderer: render,
  });
  if (arrayLinks.length === 0) {
    reject('no links');
  } else {
    resolve(arrayLinks);
  }
});

/* http request: resLinks is an object with founded links */
let validaUrl = (resLinks) => { 
let linksPromises = Array(); // array con promesas  Array() constructor is used to create Array objects.
  resLinks.forEach((url) => { // extraigo elementos y hago push a liksPromises, resolve es posterior
    linksPromises.push(
      new Promise(
        (resolve, reject) => {
          fetch(url.href)
            .then((resp) => {
              url.status = resp.status;
              url.ok = resp.ok ? 'ok' : 'fail';
              resolve(url);
            });
        },
      ),
    );
  });
  return linksPromises;
};

/* API (true-false) or CLI (options) */
const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (path === undefined) {
    reject('no input specified');
  }
  if (options.length === 0) {
    reject('no arguments specified');
  }

  readMd(path)
    .then((res) => { // parametro contiene la lectura del archivo path, respuesta positiva de funcion ReadMd//
      extracLinks(res, path) /* return arrays of found links. Paso args res(respuesta) y path del archivo analizado(href, title y file) */ 
        .then((resLinks) => { // encontró los enlaces y en el then recibo los links en resLinks, un objeto que tiene todos links encontrados
          /*  API start */
          // ========================================
          if (options.validate !== undefined) { // Si viene algun valor dentro de validate es API(true or false o cualquiera dentro de validate)
            switch (options.validate) { // si no valor en options.validate se va a CLI 
              case true: // Si es true validar Urls.  analizar si url son validas
                const result = validaUrl(resLinks); // si URL válida retorna un objeto con la promesa de los resultados validaUrl 
                Promise.all(result).then(// result se lo paso a Promise.all que me resuelve un objeto con promesas, espera hasta que todas las promesas se cumplan y entonces ejecuta el then
                  (allProm) => resolve(allProm), // allProm son respuestas resultado de las promesas y hace un resolve hacia afuera
                );
                break;
              case false: // si es false retornar objeto sin analizar urls.
                resolve(resLinks);
                break;
              default: 
                reject('not valid option');
                break;
            }/*  API end */

  // ========================================
            /* CLI start */
          } else {
            const opt = Object.values(options); // retorna array opciones.
            if (opt.length > 0) {
              const result = validaUrl(resLinks); // si viene algo validar URL con arg resLinks
              const stats = {
                Total: 0,
                Unique: 0,
                Broken: 0,
              };
              let respRes = Array(); // variable que guarda todo para despues presentarlo por consola
              opt.forEach((elem) => { // Recorro y evaluo el case: es --validate? o es --stats?
                switch (elem) {
                  case '--validate': 
                    Promise.all(result).then(// Primero resuelvo todas las promesas
                      (allProm) => { // y por cada elemento de la promesa que viene adentro hago un forEach
                        allProm.forEach((prom, i) => { // forEach para ver cuantas rutas broken. Prom es un array que viene con href, url, status y el broken
                          stats.Broken = prom.ok === 'fail' ? parseInt(stats.Broken) + 1 : stats.Broken;// ParseInt a string return an integer
                          respRes.push(Object.values(prom).join(' => '));// Hago push con objeto de la promesa que es un rray que viene con href, text, title, status y broken
                        });
                        console.log(respRes);
                      },
                    );
                    break; // si for each dice que es --stats 
                  case '--stats': // Si no viene validate no lo muestro si viente lo muestro
                    Promise.all(result).then(
                      (allProm) => {
                        const unicos = [...new Set(respRes)];// new Set deja solo valores únicos elimina duplicados/ los tres puntos es para añadir lo del result
                        // https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1
                        stats.Total = allProm.length;
                        stats.Unique = allProm.length - unicos.length;
                        console.log(stats);
                      },
                    );
                    break;
                  default: // m add
                    reject('invalid option');
                    break;
                }
              });
            } else {
              reject('no options input');// Si objeto definido en linea 98 esta vacio
            }
          }
        })
        .catch((errLinks) => reject(errLinks));
    })
    .catch((err) => reject(err)); // catch de ReadMd(path)
});

module.exports = mdLinks;
