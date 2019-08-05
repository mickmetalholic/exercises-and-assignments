/*
 * @lc app=leetcode id=396 lang=javascript
 *
 * [396] Rotate Function
 */
/**
 * @param {number[]} A
 * @return {number}
 */
function maxRotateFunction(A) {
  const sum = A.reduce((a, b) => a + b, 0);
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    res += i * A[i];
  }
  let max = res;
  for (let i = 1; i < A.length; i++) {
    const next = res + sum - A.length * A[A.length - i];
    max = Math.max(max, next);
    res = next;
  }
  return max;
}
