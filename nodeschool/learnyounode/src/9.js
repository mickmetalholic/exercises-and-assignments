const http = require('http');

function getData(url) {
  return new Promise(function(resolve) {
    http.get(url, res => {
      const bufferList = [];
      res.on('data', buf => {
        bufferList.push(buf);
      });
      res.on('end', () => {
        resolve(Buffer.concat(bufferList).toString());
      });
    });
  });
}

// async function logResponse() {
//   const res1 = await getData(process.argv[2]);
//   const res2 = await getData(process.argv[3]);
//   const res3 = await getData(process.argv[4]);
//   console.log(res1);
//   console.log(res2);
//   console.log(res3);
// }

function logResponse() {
  Promise.all([
    getData(process.argv[2]),
    getData(process.argv[3]),
    getData(process.argv[4])
  ])
  .then(function(val) {
    val.forEach(e => console.log(e));
  });
}

logResponse();
