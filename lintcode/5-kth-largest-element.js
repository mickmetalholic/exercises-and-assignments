/**
 * @param {number} n An integer
 * @param {number[]} nums An array
 * @return {number} the Kth largest element
 */
function kthLargestElement(n, nums) {
  const heap = new MinHeap();

  for (let i = 0; i < n; i++) {
    heap.add(nums[i]);
  }

  for (let i = n; i < nums.length; i++) {
    heap.add(nums[i]);
    heap.pop();
  }

  return heap.pop();
}

class MinHeap {
  constructor() {
    this._data = [];
  }

  add(n) {
    const data = this._data;
    data.push(n);

    let curIndex = data.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (data[parentIndex] > n) {
        data[curIndex] = data[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    data[curIndex] = n;
  }

  pop() {
    const data = this._data;

    if (data.length === 1) return data.pop();

    const res = data[0];

    const last = data.pop();
    let curIndex = 0;
    while (curIndex * 2 + 1 < data.length) {
      let childIndex = curIndex * 2 + 1;
      if (childIndex + 1 < data.length && data[childIndex] > data[childIndex + 1]) {
        childIndex++;
      }
      if (data[childIndex] < last) {
        data[curIndex] = data[childIndex];
        curIndex = childIndex;
      } else {
        break;
      }
    }
    data[curIndex] = last;

    return res;
  }
}
