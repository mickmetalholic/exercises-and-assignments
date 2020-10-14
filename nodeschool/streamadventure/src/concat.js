const concatStream = require('concat-stream');

const reverseStr = concatStream(str => {
  process.stdout.write(str.toString().split('').reverse().join(''));
});

process.stdin.pipe(reverseStr);
