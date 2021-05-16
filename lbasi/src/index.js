const Lexer = require('./Lexer');
const Parser = require('./Parser');
const Interpreter = require('./Interpreter');

module.exports = function interprete(text) {
  const lexer = new Lexer(text);

  const parser = new Parser(lexer);
  const ast = parser.parse();

  const interpreter = new Interpreter();
  return interpreter.visit(ast);
}
