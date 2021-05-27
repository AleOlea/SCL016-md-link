const mdLinks = require('../index2.js');

// jest.mock('node-fetch'); // mockear la libreria 
// const fetch = require('node-fetch');  // cuando la importo , estoy importando la libreria mockead

describe('mdLinks, reads path and gives options', () => {
  return mdLinks().then(data => 
    expect(data). toBe("va")) 
  });
});

//Nota: para validar is valid: https://github.com/jonschlinkert/is-valid-path/blob/master/test.js






