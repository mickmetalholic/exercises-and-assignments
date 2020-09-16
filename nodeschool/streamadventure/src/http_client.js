const http = require('http');

const req = http.request('http://localhost:8099', {
  method: 'POST',
});
req.on('response', res => {
  res.pipe(process.stdout);
});

process.stdin.pipe(req);
