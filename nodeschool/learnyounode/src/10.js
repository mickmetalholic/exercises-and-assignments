const net = require('net');

net.createServer(socket => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  socket.end(`${year}-${month.toString().padStart(2, 0)}-${date.toString().padStart(2, 0)} ${hour}:${minute}\n`);
}).listen(process.argv[2]);
