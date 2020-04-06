const Lexer = require('./Lexer');
const Parser = require('./Parser');

const text = process.argv[2];

const parser = new Parser(new Lexer(text));
console.log(parser.parse());
