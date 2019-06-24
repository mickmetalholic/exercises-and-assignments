/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .map(e => {
      let res = `${e % 3 ? '' : 'Fizz'}${e % 5 ? '' : 'Buzz'}`;
      if (res.length) {
        return res;
      } else {
        return `${e}`;
      }
    });
}
