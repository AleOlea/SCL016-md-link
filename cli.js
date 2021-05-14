#!/usr/bin/env node
//EVERYTHING WILL BE IMPORTED HERE
const mdLinks = require("./index.js");
const getUserInfo = require("./sayName")

getUserInfo.sayName();
getUserInfo.sayAddress();



mdLinks(process.argv[2])
  
//HELLO