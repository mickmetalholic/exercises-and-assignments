/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */
/**
 * @param {string} input
 * @return {number[]}
 */
function diffWaysToCompute(input) {
  const nums = input.split(/[\+\-\*]/).map(Number);
  const ops = input.split(/\d/).filter(op => op !== '');
  const results = {};
  return _compute(0, nums.length - 1);

  function _compute(i, j) {
    if (i === j) return [nums[i]];

    const id = `${i}-${j}`;
    if (results.hasOwnProperty(id)) return results[id];
    const res = [];
    for (let k = 0; k < j - i; k++) {
      const subRes1 = _compute(i, i + k);
      const subRes2 = _compute(i + k + 1, j);
      let op = ops[i + k];
      for (const num1 of subRes1) {
        for (const num2 of subRes2) {
          if (op === '+') {
            res.push(num1 + num2);
          } else if (op === '-') {
            res.push(num1 - num2);
          } else {
            res.push(num1 * num2);
          }
        }
      }
    }
    results[id] = res;
    return res;
  }
}
