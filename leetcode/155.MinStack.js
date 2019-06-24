/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this._stack = [];
    this._minStack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this._stack.push(x);
    if (
      this._minStack.length === 0
      || x <= this._minStack[this._minStack.length - 1]
    ) {
      this._minStack.push(x);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const val = this._stack.pop();
    if (this._minStack[this._minStack.length - 1] === val) {
      this._minStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this._stack[this._stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this._minStack[this._minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
