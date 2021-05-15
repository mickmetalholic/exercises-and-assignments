const { INTEGER, OPERATOR, EOF, LPAREN, RPAREN } = require('./tokenTypes');

class Parser {
  /**
   * 
   * @param {Lexer} lexer the lexer instance
   */
  constructor(lexer) {
    this.lexer = lexer;
    this.currentToken = this.lexer.getNextToken();
  }

  /**
   * Consume the current token if it matches the current lookahead token type, then get
   * a new token from the lexer and assign the next token to the current token.
   * If the current token does not match the lookahead token type, throw a syntax error.
   * @param {string} tokenType current lookahead token type
   */
  eat(tokenType) {
    if (tokenType === this.currentToken.type) {
      const { currentToken } = this;
      this.currentToken = this.lexer.getNextToken();
      return currentToken;
    } else {
      throw new SyntaxError('Error parsing input');
    }
  }

  /**
   * the factor rule
   * INTEGER
   */
  factor() {
    if (this.currentToken.value === '(') {
      this.eat(LPAREN);
      const expr = this.expr();
      this.eat(RPAREN);
      return expr;
    } else {
      const token = this.eat(INTEGER);
      return token.value;
    }
  }

  /**
   * the term rule
   * factor (MUL|DIV factor)*
   */
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

  /**
   * the expr rule
   * term (PLUS/MINUS term)*
   */
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
