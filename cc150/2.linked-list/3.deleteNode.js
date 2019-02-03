function deleteNode(node) {
  const { next } = node;
  node.val = next.val;
  node.next = next.next;
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node = new Node(3);
const head = new Node(1);
head.next = new Node(2);
head.next.next = node;
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

deleteNode(node);
console.log(head);
