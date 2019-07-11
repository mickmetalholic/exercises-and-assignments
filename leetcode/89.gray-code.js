/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */
/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
  if (n === 0) return [0];
  let seq = ['0', '1'];
  for (let i = 2; i <= n; i++) {
    seq = seq.map(e => `0${e}`)
            .concat(seq.reverse().map(e => `1${e}`));
  }
  return seq.map(num => Number.parseInt(num, 2));
}
