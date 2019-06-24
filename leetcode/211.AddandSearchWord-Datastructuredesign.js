/**
 * Initialize your data structure here.
 */
class WordDictionary {
  constructor() {
    this._root = {
      char: '',
      children: {},
      isWord: false,
    };
  }
  
  /**
   * Adds a word into the data structure. 
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this._root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = {
          char,
          children: {},
          isWord: false,
        };
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
  
  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return _search(word, this._root);

    function _search(substr, root) {
      let node = root;
      for (let i = 0; i < substr.length; i++) {
        const char = substr[i];
        if (char === '.') {
          return Object.values(node.children).some(child => _search(substr.slice(i + 1), child));
        } else if (!node.children[char]) {
          return false;
        } else {
          node = node.children[char];
        }
      }
      return node.isWord;
    }
  }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */