const mdLinks = require('./index2');

/*
 API
 */

// mdLinks(path, { validate: false }) // false or true
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

/*
CLI --validate --stats
*/

mdLinks(process.argv[2], process.argv.slice(3))
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
