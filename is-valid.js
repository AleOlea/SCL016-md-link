/*!
 * is-valid-path <https://github.com/jonschlinkert/is-valid-path
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */
//Returns true if a file path does not contain any invalid characters or is empty
'use strict';
let fs = require("fs")
let path = require ("path")
const isValid = require('is-valid-path');
const isValidPath = require("is-valid-path");

const isValidInput = () => {
const pathToValidate = (process.argv[2])

const isValidPath = isValid(pathToValidate)
  console.log(isValidPath)
    if (isValid(pathToValidate)===false){
     
      console.log("please enter a valid input")
      } else {
      console.log("Welcome!")
    }
return isValidPath
}

isValidInput()

module.exports = isValidPath;