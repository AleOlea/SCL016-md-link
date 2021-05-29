const mdLinks = require('./index');

/*
 API  case false / case true
*/

mdLinks(process.argv[2], { validate: false })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

/*
CLI --validate --stats
*/

// mdLinks(process.argv[2], process.argv.slice(3))
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
