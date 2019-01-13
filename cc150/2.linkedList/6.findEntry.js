function findEntry(head) {
  let p1 = head.next, p2 = head.next.next;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  let p3 = head;
  while (p3 !== p1) {
    p1 = p1.next;
    p3 = p3.next;
  }

  return p3;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
const res = new Node(4);
node.next.next.next = res;
node.next.next.next.next = new Node(5);
node.next.next.next.next.next = new Node(6);
node.next.next.next.next.next.next = res;

console.log(findEntry(node) === res);
