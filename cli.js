#!/usr/bin/env node
//EVERYTHING WILL BE IMPORTED HERE
const isValidPath = require("is-valid-path");
const mdLinks = require("./index.js");
const isValidInput = require("./is-valid");
// const isAbs = require("./is-absolute")



//verify if file path does not contain any invalid characters or it is empty
const isValid = isValidPath();




// Read the file and print content to the console
const input = mdLinks(process.argv[2])
  
