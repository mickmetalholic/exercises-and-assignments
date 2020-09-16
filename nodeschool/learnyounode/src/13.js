const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/api/parsetime') {
    const date = new Date(query.iso);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds(),
    }));
  } else if (pathname === '/api/unixtime') {
    const date = new Date(query.iso);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      "unixtime": date.valueOf(),
    }));
  }
}).listen(process.argv[2]);
