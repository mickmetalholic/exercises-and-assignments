function removeRedundant1(head) {
  if (head === null || head.next === null) return head;
  let prev = head, cur = head.next;
  const set = new Set();
  while (cur) {
    if (set.has(cur.val)) {
      prev.next = cur.next;
    } else {
      set.add(cur.val);
      prev = cur;
    }
    cur = prev.next;
  }
  return head;
}

function removeRedundant2(head) {
  if (head === null || head.next === null) return head;

  let prev = head, cur = head.next;
  let curIndex = 1;
  while (cur) {
    if (curIndex !== findIndex(head, cur.val)) {
      prev.next = cur.next;
    } else {
      prev = cur;
      curIndex++;
    }
    cur = prev.next;
  }
  return head;

  function findIndex(head, val) {
    let index = 0;
    while (head) {
      if (head.val === val) return index;
      index++;
      head = head.next;
    }
    return -1;
  }
}

function removeRedundant3(head) {
  if (head === null || head.next === null) return head;
  let cur = head;
  while (cur) {
    const { val } = cur;
    let p = cur;
    while (p.next) {
      if (p.next.val === val) {
        p.next = p.next.next;
      } else {
        p = p.next;
      }
    }
    cur = cur.next;
  }
  return head;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(1);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(1);

console.log(removeRedundant1(head));
console.log(removeRedundant2(head));
console.log(removeRedundant3(head));
