const Token = require('./Token');
const { INTEGER, OPERATOR, EOF, LPAREN, RPAREN } = require('./tokenTypes');

const OPETATORS = new Set(['+', '-', '*', '/']);

class Lexer {
  constructor(text) {
    this.text = text;
    this.pos = 0;
  }

  get currentChar() {
    if (this.pos >= this.text.length) {
      return null;
    } else {
      return this.text[this.pos];
    }
  }

  advance() {
    this.pos++;
  }

  integer() {
    let res = '';
    while (this.currentChar && /\d/.test(this.currentChar)) {
      res += this.currentChar;
      this.advance();
    }
    return Number(res);
  }

  getNextToken() {
    while (this.currentChar) {
      if (this.currentChar === ' ') {
        this.advance();
        continue;
      }

      if (this.currentChar === '(') {
        const { currentChar } = this;
        this.advance();
        return new Token(LPAREN, currentChar);
      }

      if (this.currentChar === ')') {
        const { currentChar } = this;
        this.advance();
        return new Token(RPAREN, currentChar);
      }

      if (/\d/.test(this.currentChar)) {
        return new Token(INTEGER, this.integer());
      }

      if (OPETATORS.has(this.currentChar)) {
        const { currentChar } = this;
        this.advance();
        return new Token(OPERATOR, currentChar);
      }

      throw new Error('Error parsing input');
    }
    return new Token(EOF, null);
  }
}

module.exports = Lexer;
