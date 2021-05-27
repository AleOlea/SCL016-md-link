const mdLinks = require('./index2')
path = process.argv[2]

/*API*/

mdLinks(path, { validate: true }) //or true
    .then(res => console.log(res))
    .catch(error => console.log(error)) 


/*
caso que use parametros: 
node app Readme2.md --validate --stats
*/

// mdLinks(process.argv[2], process.argv.slice(3))
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

