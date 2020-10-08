const through2 = require('through2');

process.stdin.pipe(through2(function(chunk, enc, callback) {
  this.push(chunk.toString().toUpperCase());
  callback();
})).pipe(process.stdout);