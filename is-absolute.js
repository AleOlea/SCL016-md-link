#!/usr/bin/env node
let fs = require("fs")
let path = require ("path")

let files = process.argv[2]



const parseMyFile = path.parse(files)
console.log(parseMyFile)

const isAbsolute = path.isAbsolute(toString(files))
console.log(isAbsolute)

const extName = path.extname(files)
console.log(extName)

