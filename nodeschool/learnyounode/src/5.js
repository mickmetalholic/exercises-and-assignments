const fs = require('fs');

const [dirName, ext] = process.argv.slice(2);

fs.readdir(dirName, (err, files) => {
  const fileNames = files.filter(fileName => fileName.endsWith(`.${ext}`)).join('\n');
  console.log(fileNames);
});
