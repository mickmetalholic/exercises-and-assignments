function isPalindrome(head) {
  let p1 = head, length = 0, list = null, p2 = null;
  while (p1) {
    if (!p2) {
      list = new Node(p1.val);
      p2 = list;
    } else {
      p2.next = new Node(p1.val);
      p2 = p2.next;
    }
    p1 = p1.next;
    length++;
  }

  if (length <= 1) return true;
  if (length === 2) return head.val === head.next.val;

  p1 = list;
  p2 = list.next;
  let p3 = list.next.next;
  p1.next = null;
  while (p2) {
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3 && p3.next;
  }
  list = p1;

  p1 = head;
  p2 = list;
  while (p1 && p1.val === p2.val) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return !p1;
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
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(6);

console.log(isPalindrome(head));
