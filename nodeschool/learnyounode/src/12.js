const http = require('http');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    const bufferList = [];
    req.on('data', data => {
      bufferList.push(data);
    });
    req.on('end', () => {
      const str = Buffer.concat(bufferList).toString().toUpperCase();
      res.end(str);
    });
  }
}).listen(process.argv[2]);
