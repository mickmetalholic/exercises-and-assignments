const { INTEGER, OPERATOR, EOF, LPAREN, RPAREN } = require('./tokenTypes');

class BinOp {
  constructor(left, op, right) {
    this.left = left;
    this.op = op;
    this.right = right;
  }
}

class Num {
  constructor(token) {
    this.token = token;
    this.value = token.value;
  }
}

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
      return new Num(token);
    }
  }

  /**
   * the term rule
   * factor (MUL|DIV factor)*
   */
  term() {
    let node = this.factor();

    while (['*', '/'].includes(this.currentToken.value)) {
      const operatorToken = this.eat(OPERATOR);
      node = new BinOp(node, operatorToken, this.factor());
    }
    return node;
  }

  /**
   * the expr rule
   * term (PLUS/MINUS term)*
   */
  expr() {
    let node = this.term();

    while (['+', '-'].includes(this.currentToken.value)) {
      const operatorToken = this.eat(OPERATOR);
      node = new BinOp(node, operatorToken, this.term());
    }
    return node;
  }

  parse() {
    return this.expr();
  }
}

module.exports = Parser;
