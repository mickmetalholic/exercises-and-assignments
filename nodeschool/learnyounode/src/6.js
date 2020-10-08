const printFileNames = require('./6.1');

const dirname = process.argv[2];
const ext = process.argv[3];

function callback(err, fileNames) {
  if (err) {
    console.error(err);
    return;
  }
  fileNames.forEach(e => console.log(e));
}

printFileNames(dirname, ext, callback);
