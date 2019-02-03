function findLastK(head, k) {
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k; i++) {
    p2 = p2.next;
  }
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(findLastK(head, 4));
