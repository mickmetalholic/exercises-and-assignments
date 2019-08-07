/*
 * @lc app=leetcode id=470 lang=javascript
 *
 * [470] Implement Rand10() Using Rand7()
 */
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
function rand10() {
  // res: 1~40 the remainder is 1~9 0
  let res = rand49();
  while (res > 40) {
    res = rand49();
  }
  return res % 10 + 1;

  /**
   * generate 1~49
   */
  function rand49() {
    return (rand7() + (rand7() - 1) * 7);
  }
}
