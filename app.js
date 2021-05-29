const mdLinks = require('./index');

/*
 **API** (application programming interface).  Cases: false or true
*/

// mdLinks(process.argv[2], { validate: true })
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

/*
**CLI**(Comand Line Interface). Options:--validate or/and --stats
*/

mdLinks(process.argv[2], process.argv.slice(3))
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
