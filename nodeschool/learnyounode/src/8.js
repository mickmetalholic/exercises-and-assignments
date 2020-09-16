const http = require('http');

http.get(process.argv[2], res => {
  const bufferList = [];
  res.on('data', chunk => {
    bufferList.push(chunk);
  });
  res.on('end', () => {
    const str = Buffer.concat(bufferList).toString();
    console.log(str.length);
    console.log(str);
  });
});
