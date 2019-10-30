/*
 * @lc app=leetcode id=731 lang=javascript
 *
 * [731] My Calendar II
 */

// @lc code=start

class MyCalendarTwo {
  constructor() {
    this.events = [];
    this.overlaps = [];
  }

  /** 
   * @param {number} start 
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    for (const [l, r] of this.overlaps) {
      if (start < r && end > l) return false;
    }
    for (const [l, r] of this.events) {
      if (start < r && end > l) {
        this.overlaps.push([Math.max(l, start), Math.min(r, end)]);
      }
    }
    this.events.push([start, end]);
    return true;
  }
}

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
