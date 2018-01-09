// Exercise 1: Hello World
// console.log('HELLO WORLD');


// Exercise 2: Baby Steps
// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }
// console.log(sum);


// Exercise 3: My First I/O
// const fs = require('fs');

// var contents = fs.readFileSync(process.argv[2]).toString();
// var newLines = contents.split('\n').length - 1;
// console.log(newLines);


// Exercise 4: My First Async I/O
// const fs = require('fs');

// fs.readFile(process.argv[2], 'utf8', function(err, data) {
//   if (err) {
//     throw err;
//   }
//   console.log(data.split('\n').length - 1);
// });


// Exercise 5: Filtered LS
const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(directory, (err, fileArr) => {
  if (err) throw err;

  fileArr.forEach(file => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
