const through2 = require('through2');
const split = require('split');

let lineNum = 0;

process.stdin
  .pipe(split())
  .pipe(through2(function (line, _, next) {
    this.push(lineNum % 2 ? line.toString().toUpperCase() : line.toString().toLowerCase());
    this.push('\n');
    lineNum++;
    next();
  }))
  .pipe(process.stdout);
