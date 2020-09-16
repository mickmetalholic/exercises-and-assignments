const http = require('http');
const through2 = require('through2');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    req
      .pipe(through2(function(chunk, enc, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
      }))
      .pipe(res);
  }
})
.listen(process.argv[2]);
