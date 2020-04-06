const { INTEGER, OPERATOR, EOF } = require('./tokenTypes');

class Parser {
  /**
   * 
   * @param {Lexer} lexer the lexer instance
   */
  constructor(lexer) {
    this.lexer = lexer;
    this.currentToken = this.lexer.getNextToken();
  }

  eat(tokenType) {
    if (tokenType === this.currentToken.type) {
      const { currentToken } = this;
      this.currentToken = this.lexer.getNextToken();
      return currentToken;
    } else {
      throw new SyntaxError('Error parsing input');
    }
  }

  factor() {
    const token = this.eat(INTEGER);
    return token.value;
  }

  term() {
    let result = this.factor();

    while (['*', '/'].includes(this.currentToken.value)) {
      const operatorToken = this.eat(OPERATOR);
      if (operatorToken.value === '*') {
        result *= this.factor();
      } else {
        result /= this.factor();
      }
    }
    return result;
  }

  expr() {
    let result = this.term();

    while (['+', '-'].includes(this.currentToken.value)) {
      const operatorToken = this.eat(OPERATOR);
      if (operatorToken.value === '+') {
        result += this.term();
      } else {
        result -= this.term();
      }
    }
    return result;
  }

  parse() {
    return this.expr();
  }
}

module.exports = Parser;
