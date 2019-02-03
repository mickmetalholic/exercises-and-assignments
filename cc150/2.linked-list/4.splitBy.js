function splitBy(head, x) {
  // find x
  let p = head;
  while (p.val !== x) {
    p = p.next;
  }
  // head <-> p
  const tmp1 = p.val;
  p.val = head.val;
  head.val = tmp1;

  let p1 = head;
  let p2 = head.next;
  while (p2 !== null) {
    if (p2.val < x) {
      // p1 -->
      p1 = p1.next;
      // p1 <-> p2
      const tmp = p1.val;
      p1.val = p2.val;
      p2.val = tmp;
    }
    // p2 -->
    p2 = p2.next;
  }

  // head <-> p1
  const tmp2 = p1.val;
  p1.val = head.val;
  head.val = tmp2;
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(6);
head.next = new Node(2);
head.next.next = new Node(5);;
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(3);

splitBy(head, 4);
console.log(head);
