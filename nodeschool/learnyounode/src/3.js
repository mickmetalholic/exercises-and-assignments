const fs = require('fs');

const fileName = process.argv[2];
const fileData = fs.readFileSync(fileName).toString();
const lineCount = fileData.split('\n').length - 1;
console.log(lineCount);
