const fs = require('fs');
const path = require('path');

module.exports = function(dirname, ext, callback) {
  fs.readdir(dirname, function(err, fileNames) {
    if (err) {
      callback(err);
    } else {
      const filteredFileNames = fileNames.filter(fileName => path.extname(fileName) === `.${ext}`);
      callback(null, filteredFileNames);
    }
  });
};
