const mdLinks = require('./index2');

/*
 API
 */

// mdLinks(path, { validate: false }) // false or true
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

/*
CLI
node app --validate --stats
*/

mdLinks(process.argv[2], process.argv.slice(3)) // porque silce 3 y no 3, 5
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
