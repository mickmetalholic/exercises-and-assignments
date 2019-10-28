/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

// @lc code=start

class MyCalendar {
  constructor() {
    this.root = null;
  }

  /** 
   * @param {number} start 
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    if (!this.root) {
      this.root = new Node(start, end);
      return true;
    } else {
      return this.root.insert(start, end);
    }
  }
}

class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.left = this.right = null;
  }

  insert(start, end) {
    if (end <= this.start) {
      if (this.left) {
        return this.left.insert(start, end);
      } else {
        this.left = new Node(start, end);
        return true;
      }
    } else if (start >= this.end) {
      if (this.right) {
        return this.right.insert(start, end);
      } else {
        this.right = new Node(start, end);
        return true;
      }
    } else {
      return false;
    }
  }
}

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
