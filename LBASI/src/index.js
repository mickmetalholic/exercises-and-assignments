const Lexer = require('./Lexer');
const Parser = require('./Parser');

module.exports = function parse(text) {
  const parser = new Parser(new Lexer(text));
  return parser.parse();
}
