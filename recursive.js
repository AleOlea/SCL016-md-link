// const fs = require('fs');
// const path = require('path');


// /* Recuerda usar folder y no file como argumento.  Ej: lib */
// /**
//  * Explores recursively a directory and returns all the
// filepaths and folderpaths in the callback.
//  *
//  * @see http://stackoverflow.com/a/5827895/4241030
//  * @param {String} files
//  * @param {Function} done
//  */
// function filewalker(files, done) {
//   let results = [];
//   fs.readdir(files, (err, list) => {
//     if (err) return done(err);
//     let pending = list.length;
//     if (!pending) return done(null, results);
//     list.forEach((file) => {
//       file = path.resolve(files, file);

//       fs.stat(file, (err, stat) => {
//         // If directory, execute a recursive call
//         if (stat && stat.isDirectory()) {
//           // Add directory to array
//           // [comment if you need to remove the directories from the array]
//           results.push(file);
//           filewalker(file, (err, res) => {
//             results = results.concat(res);
//             if (!--pending) done(null, results);
//           });
//         } else {
//           results.push(file);
//           if (!--pending) done(null, results);
//         }
//       });
//     });
//   });
// }

// filewalker(process.argv[2], (err, data) => {
//   if (err) {
//     throw err;
//   }
//   // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
//   console.log(data);
//   return filewalker;
// });