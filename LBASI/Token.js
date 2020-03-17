class Token {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  /**
   * String representation of the class instance.
   */
  toString() {
    return `Token(${this.type}, ${this.value})`;
  }
}

module.exports = Token;
