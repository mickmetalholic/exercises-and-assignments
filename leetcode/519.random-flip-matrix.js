/*
 * @lc app=leetcode id=519 lang=javascript
 *
 * [519] Random Flip Matrix
 */
/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
class Solution {
  constructor(n_rows, n_cols) {
    this.ones = new Set();
    this.n_rows = n_rows;
    this.n_cols = n_cols;
    this.total = n_rows * n_cols;
  }

  /**
   * @return {number[]}
   */
  flip() {
    while (true) {
      const cur = Math.floor(Math.random() * this.total);
      if (!this.ones.has(cur)) {
        this.ones.add(cur);
        return [Math.floor(cur / this.n_cols), cur % this.n_cols];
      }
    }
  }

  /**
   * @return {void}
   */
  reset() {
    this.ones = new Set();
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */
