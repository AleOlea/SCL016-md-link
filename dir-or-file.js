const fs = require('fs');

const files = process.argv[2];

/* Is a directory? false -true
   Is a file? false - true */

const isDirOrFile = () => fs.stat(files, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  stats.isFile();
  stats.isDirectory();
  console.log('Is a directory?', stats.isDirectory());
  console.log('Is a file?', stats.isFile());
});
isDirOrFile();
