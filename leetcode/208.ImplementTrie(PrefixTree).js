/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this._root = {
      children: {},
      val: false,
    };
  }
  
  /**
   * Inserts a word into the trie. 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let children = this._root.children;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!children[ch]) {
        children[ch] = {
          children: {},
          val: false,
        };
      }
      if (i === word.length - 1) {
        children[ch].val = true;
      }
      children = children[ch].children;
    }
  }

  /**
   * Returns if the word is in the trie. 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this._getLastNode(word);
    return !!(node && node.val);
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix. 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return !!this._getLastNode(prefix);
  }

  _getLastNode(str) {
    let node =  this._root;
    let i = 0;
    while (i < str.length) {
      const ch = str[i];
      node = node.children && node.children[ch];
      if (!node) return null;
      i++;
    }
    return node;
  }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
