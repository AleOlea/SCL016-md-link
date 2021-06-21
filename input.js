const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const isValid = require('is-valid-path');

const files = process.argv[2];

const validateInput = () => {
  fs.access(files, fs.F_OK, (err) => {
    if (err) {
      console.error('File does not exists');
      return;
    }
    console.log('File exists');
  });
  // Returns true if no invalid characters or empty
  const iV = isValid(files);
  console.log('is valid:', iV);

  // Finds if path is absolute
  // https://www.geeksforgeeks.org/node-js-fs-realpath-method/
  fs.realpath(files, (error, resolvedPath) => {
    if (error) {
      console.log(error);
    } else {
      console.log('One directory up resolved'
      + ' path is: ', resolvedPath);
    }
  });

  const isAbs = path.isAbsolute(files)
  console.log("path is absolute?:", isAbs);
  if (!path.isAbsolute(files)) {
  // make it absolute
    const makeItAbs = resolve(files)
    // files = makeItAbs
    console.log("Path made abs =>", makeItAbs)
    // console.log("9 =>Current Directory Path:", __dirname)
    // console.log("9 =>Current File Name:", __filename)
  } else {
    console.log("Is already absolute")
  }
//  return isAbs
};
validateInput();

// module.exports = validateInput;
