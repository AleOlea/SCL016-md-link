#!/usr/bin/env node
const mdLinks = require("./index.js");
const validateInput = require("./is-abs")

const validInput = validateInput()

// // Read the file and print content to the console
const input = mdLinks(process.argv[2])
  
