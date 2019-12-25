/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this._map = new Map();
    this._list = new DoubleLinkedList();
    this._capaticy = capacity;
  }

  get size() {
    return this._map.size;
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this._map.get(key);

    if (node === undefined) return -1;

    this._list.delete(node);
    this._list.add(node);

    return node.value;
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this._map.has(key)) {
      this._list.delete(this._map.get(key));
      this._map.delete(key);
    }

    const node = new Node(key, value);
    this._map.set(key, node);
    this._list.add(node);

    if (this.size > this._capaticy) {
      const tail = this._list.tail;
      this._list.delete(tail);
      this._map.delete(tail.key);
    }
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  /**
   * delete a node
   * @param {Node} node the node to be deleted
   */
  delete(node) {
    const { prev, next } = node;
    if (node === this.head) this.head = next;
    if (node === this.tail) this.tail = prev;
    if (prev) prev.next = next;
    if (next) next.prev = prev;
    node.prev = node.next = null;
  }

  /**
   * add a node to the head of the linked list
   * @param {Node} node the node to be added
   */
  add(node) {
    const { head } = this;
    if (!head) {
      this.head = this.tail = node;
    } else {
      head.prev = node;
      node.next = head;
      this.head = node;
    }
  }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
