// recursive

function isPalindrome(head) {
  let p = head, length = 0;
  while (p) {
    length++;
    p = p.next;
  }

  const { isPal } = _isPalindrome(head, length);
  return isPal;

  function _isPalindrome(node, length) {
    if (length === 1) return { tail: node, isPal: true };
    if (length === 2) return { tail: node.next, isPal: node.val === node.next.val };

    const res = _isPalindrome(node.next, length - 2);
    const tail = res.tail.next;
    const isPal = res.isPal && node.val === tail.val;
    return { tail, isPal };
  }
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
