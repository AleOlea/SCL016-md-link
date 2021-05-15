#!/usr/bin/env node
//EVERYTHING WILL BE IMPORTED HERE
const isValidPath = require("is-valid-path");
const mdLinks = require("./index.js");
const isValidInput = require("./is-valid");

const isValid = isValidPath()

mdLinks(process.argv[2])
  
