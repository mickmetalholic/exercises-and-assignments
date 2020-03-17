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
      this.currentToken = this.lexer.getNextToken();
    } else {
      throw new SyntaxError('Error parsing input');
    }
  }

  factor() {
    this.eat(INTEGER);
  }

  expr() {
    this.factor();

    while (this.currentToken.type === OPERATOR) {
      this.eat(OPERATOR);
      this.factor();
    }
  }

  parse() {
    this.expr();
  }
}

module.exports = Parser;
