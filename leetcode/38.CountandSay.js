/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let cur = '1';
  for (let i = 0; i < n - 1; i++) {
    let next = '';
    let ch, count = 0;
    for (const char of cur) {
      if (!ch || ch !== char) {
        if (count > 0) {
          next += `${count}${ch}`;
        }
        ch = char;
        count = 1;
      } else {
        count++;
      }
    }
    next += `${count}${ch}`;
    cur = next;
  }
  return cur;
}
