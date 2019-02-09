class MinStack {
  constructor() {
    this._data = [];
    this._minData = [];
  }

  push(val) {
    this._data.push(val);
    const min = this.min();
    if (!min || val <= min) {
      this._minData.push(val);
    }
  }

  pop() {
    const res = this._data.pop();
    const min = this.min();
    if (res === min) {
      this._minData.pop();
    }
    return res;
  }

  min() {
    return this._minData[this._minData.length - 1];
  }
}


const ms = new MinStack();
ms.push(8);
console.log(ms.min() === 8);
ms.push(2);
console.log(ms.min() === 2);
ms.push(6);
console.log(ms.min() === 2);
ms.push(1);
console.log(ms.min() === 1);
ms.pop();
console.log(ms.min() === 2);
ms.pop();
console.log(ms.min() === 2);
ms.pop();
console.log(ms.min() === 8);
ms.push(5);
console.log(ms.min() === 5);
