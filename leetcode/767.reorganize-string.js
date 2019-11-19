/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
class MaxHeap {
  constructor(compareFunction) {
    this.data = [];
    this.compareFunction = compareFunction;
  }

  push(val) {
    const { data, compareFunction } = this;
    data.push(val);
    let curIndex = data.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (compareFunction(data[parentIndex], val)) {
        break;
      } else {
        data[curIndex] = data[parentIndex];
        curIndex = parentIndex;
      }
    }
    data[curIndex] = val;
  }

  pop() {
    const { data, compareFunction } = this;
    if (data.length === 1) return data.pop();

    const res = data[0];

    data[0] = data.pop();
    let curIndex = 0, curVal = data[0];
    while (curIndex * 2 + 1 < data.length) {
      let childIndex = curIndex * 2 + 1;
      if (
        childIndex + 1 < data.length &&
        compareFunction(data[childIndex + 1], data[childIndex])
      ) {
        childIndex++;
      }
      if (compareFunction(curVal, data[childIndex])) {
        break;
      } else {
        data[curIndex] = data[childIndex];
        curIndex = childIndex;
      }
    }
    data[curIndex] = curVal;

    return res;
  }

  top() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }
}
/**
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
  if (S.length < 2) return S;

  const count = {};
  for (const ch of S) {
    count[ch] = count[ch] || 0;
    count[ch]++;
  }

  function compareFunction(a, b) {
    return count[a] >= count[b];
  }
  const heap = new MaxHeap(compareFunction);
  for (const c of Object.keys(count)) {
    heap.push(c);
  }

  if (count[heap.top()] > Math.floor((S.length + 1) / 2)) return '';


  let res = '';
  while (heap.size() >= 2) {
    const a = heap.pop();
    const b = heap.pop();
    res += `${a}${b}`;
    count[a]--;
    count[b]--;
    if (count[a] > 0) {
      heap.push(a);
    }
    if (count[b] > 0) {
      heap.push(b);
    }
  }
  if (heap.size() > 0) {
    res += heap.pop();
  }
  return res;
}
// @lc code=end

reorganizeString('aabb');
