#!/usr/bin/env node
const mdLinks = require("./index.js");
const validateInput = require("./input")

const validInput = validateInput()


const input = mdLinks(process.argv[2])
  
