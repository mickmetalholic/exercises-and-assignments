const fs = require('fs');

const fileName = process.argv[2];
fs.readFile(fileName, 'utf8', (err, data) => {
  const lineCount = data.split('\n').length - 1;
  console.log(lineCount);  
});
