// function removeRedundant(str) {
//   let res = '';
//   for (let i = 0; i < str.length; i++) {
//     if (res.indexOf(str[i]) === -1) {
//       res += str[i];
//     }
//   }
//   return res;
// }

function removeRedundant(str) {
  let res = '', s = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!s.has(str[i])) {
      res += str[i];
      s.add(str[i]);
    }
  }
  return res;
}


console.log(removeRedundant('a') === 'a');
console.log(removeRedundant('aa') === 'a');
console.log(removeRedundant('aab') === 'ab');
console.log(removeRedundant('aabb') === 'ab');
console.log(removeRedundant('ababbabbabba') === 'ab');
