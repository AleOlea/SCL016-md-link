const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const isValid = require('is-valid-path');

const files = process.argv[2];

// validar si es directorio o file

const isDirOrFile = () => fs.stat(files, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  const isFile = stats.isFile(); // true
  const isDir = stats.isDirectory(); // false
  console.log('Is a directory?', stats.isDirectory());
  console.log('Is a file?', stats.isFile());
});
isDirOrFile();

// ESTOS SON EJERCICOS PARA PRACTICAR PATHS ABOSULTAS Y RELATIVAS
const valInput = () => {
  fs.access(files, fs.F_OK, (err) => {
    if (err) {
      console.error('A => File does not exists');
      return;
    }
    console.log('B => File exists');
  });

  const v = isValid(files);
  console.log('1=>', v);

  const p = path.isAbsolute(files);
  console.log('2 =>', p);

  const n = path.normalize(files);
  console.log('3=>', n);

  const r = path.resolve(files);
  console.log('4 =>', r);

  fs.realpath(files, (error, resolvedPath) => {
    if (error) {
      console.log(error);
    } else {
      console.log('5=> One directory up resolved'
      + ' path is: ', resolvedPath);
    }
    return valInput;
  });
};

valInput();
