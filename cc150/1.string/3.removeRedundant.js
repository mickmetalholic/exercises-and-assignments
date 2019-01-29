function removeRedundant(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (res.indexOf(str[i]) === -1) {
      res += str[i];
    }
  }
  return res;
}


module.exports = removeRedundant;
