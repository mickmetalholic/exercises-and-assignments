// use stack to store the half of the linked list

function isPalindrome(head) {
  let p = head, length = 0;
  while (p) {
    length++;
    p = p.next;
  }

  const s = [];
  p = head;
  while (s.length < Math.floor(length / 2)) {
    s.push(p.val);
    p = p.next;
  }
  if (length % 2) p = p.next;
  while (s.length && s.pop() === p.val) {
    p = p.next;
  }

  return !s.length;
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(6);
head.next = new Node(2);
head.next.next = new Node(5);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next = new Node(6);

console.log(isPalindrome(head));
