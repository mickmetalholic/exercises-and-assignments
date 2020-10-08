const through2 = require('through2');
const trumpet = require('trumpet');

const tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

const loud = tr.select('.loud').createStream();
loud.pipe(through2(function(chunk, _, callback) {
  this.push(chunk.toString().toUpperCase());
  callback();
})).pipe(loud);

