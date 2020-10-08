const duplexer2 = require('duplexer2');
const { spawn } = require('child_process');

module.exports = function(cmd, args) {
  const childProcess = spawn(cmd, args);
  return duplexer2(childProcess.stdin, childProcess.stdout);
}
