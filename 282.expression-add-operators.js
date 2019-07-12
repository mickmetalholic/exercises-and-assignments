/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 */
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
function addOperators(num, target) {
  const res = [];
  dfs(num, [], 0, 0);
  return res;

  function dfs(str, exp, prev, cur) {
    if (str.length === 0) {
      if (cur === target) {
        res.push(exp.join(''));
      }
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      if (i > 1 && str[0] === '0') break;
      const curNum = Number(str.slice(0, i));
      if (str.length === num.length) {
        dfs(str.slice(i), exp.concat(curNum), curNum, curNum);
      } else {
        dfs(str.slice(i), exp.concat('+', curNum), curNum, cur + curNum);
        dfs(str.slice(i), exp.concat('-', curNum), -curNum, cur - curNum);
        dfs(str.slice(i), exp.concat('*', curNum), prev * curNum, cur - prev + prev * curNum);
      }
    }
  }
}
