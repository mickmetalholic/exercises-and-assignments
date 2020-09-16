const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const fileStream = fs.createReadStream(process.argv[3]);
  fileStream.pipe(res);
}).listen(process.argv[2]);
