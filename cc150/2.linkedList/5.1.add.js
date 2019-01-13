function add(a, b) {
  let p1 = a, p2 = b;
  let carry = 0;
  let last;
  let sum;
  while (p1 || p2) {
    const res = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
    carry = Math.floor(res / 10);
    const cur = new Node(res % 10);
    if (last) {
      last.next = cur;
    } else {
      sum = cur;
    }
    last = cur;
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }
  if (carry) {
    last.next = new Node(1);
  }
  return sum;
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
a.next = new Node(1);
a.next.next = new Node(6);;

b = new Node(5);
b.next = new Node(9);
b.next.next = new Node(2);

console.log(add(a, b));
