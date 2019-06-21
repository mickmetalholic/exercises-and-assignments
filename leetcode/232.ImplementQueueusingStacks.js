/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this._s1 = [];
    this._s2 = [];
  }

  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this._s1.push(x);
  }
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    while (this._s1.length) {
      this._s2.push(this._s1.pop());
    }
    const res = this._s2.pop();
    while (this._s2.length) {
      this._s1.push(this._s2.pop());
    }
    return res;
  }
  
  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    while (this._s1.length) {
      this._s2.push(this._s1.pop());
    }
    const res = this._s2[this._s2.length - 1];
    while (this._s2.length) {
      this._s1.push(this._s2.pop());
    }
    return res;
  }
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this._s1.length === 0;
  }
}
  
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
