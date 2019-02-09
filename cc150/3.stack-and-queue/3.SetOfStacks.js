class SetOfStacks {
  constructor(maxSize) {
    this._maxSize = maxSize;
    this._stackSets = [];
  }

  push(val) {
    const lastStack = this._stackSets[this._stackSets.length - 1];
    if (!lastStack || lastStack.length === this._maxSize) {
      const newStack = [];
      this._stackSets.push(newStack);
      newStack.push(val);
    } else {
      lastStack.push(val);
    }
  }

  pop() {
    const lastStack = this._stackSets[this._stackSets.length - 1];
    if (!lastStack) throw new Error('Exceed stack size');
    const res = lastStack.pop();
    if (!lastStack.length) {
      this._stackSets.pop();
    }
    return res;
  }
}

const ss = new SetOfStacks(2);
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);
ss.push(5);
console.log(ss.pop());
console.log(ss.pop());
console.log(ss.pop());
console.log(ss.pop());
console.log(ss.pop());
