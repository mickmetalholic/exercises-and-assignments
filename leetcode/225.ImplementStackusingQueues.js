/**
 * Initialize your data structure here.
 */
class MyStack {
  constructor() {
    this._q1 = [];
    this._q2 = [];
  }
  
  /**
   * Push element x onto stack. 
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this._q1.length) {
      this._q1.push(x);
    } else {
      this._q2.push(x);
    }
  }
  
  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    let current, tmp;
    if (this._q1.length) {
      current = this._q1;
      tmp = this._q2;
    } else {
      current = this._q2;
      tmp = this._q1;
    }
    while (current.length > 1) {
      tmp.push(current.shift());
    }
    return current.shift();
  }
  
  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    let current, tmp;
    if (this._q1.length) {
      current = this._q1;
      tmp = this._q2;
    } else {
      current = this._q2;
      tmp = this._q1;
    }
    while (current.length > 1) {
      tmp.push(current.shift());
    }
    const res = current.shift();
    tmp.push(res);
    return res;
  }
  
  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return this._q1.length === 0 && this._q2.length === 0;
  }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */