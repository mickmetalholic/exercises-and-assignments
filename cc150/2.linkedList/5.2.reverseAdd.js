function addReverse(a, b) {
  let lengthA = _length(a);
  let lengthB = _length(b);

  const _a = _pad(a, lengthB - lengthA);
  const _b = _pad(b, lengthA - lengthB);

  let sum = _addReverse(_a, _b);
  if (sum.val > 10) {
    sum.val -= 10;
    const newSum = new Node(1);
    newSum.next = sum;
    sum = newSum;
  }
  return sum;

  function _length(head) {
    let length = 0;
    let p1 = head;
    while (p1) {
      length++;
      p1 = p1.next;
    }
    return length;
  }

  function _pad(head, length) {
    if (length <= 0) return head;
    let res = head;
    while (length) {
      const node = new Node(0);
      node.next = res;
      res = node;
      length--;
    }
    return res;
  }

  function _addReverse(a, b) {
    let carry = 0, next = null;
    if (a.next && b.next) {
      const nextRaw = _addReverse(a.next, b.next);
      carry = Math.floor(nextRaw.val / 10);
      next = new Node(nextRaw.val % 10);
      next.next = nextRaw.next;
    }
    const res = new Node(a.val + b.val + carry);
    res.next = next;
    return res;
  }
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
a.next = new Node(6);
a.next.next = new Node(1);
a.next.next.next = new Node(7);;

b = new Node(2);
b.next = new Node(9);
b.next.next = new Node(5);

console.log(addReverse(a, b));
