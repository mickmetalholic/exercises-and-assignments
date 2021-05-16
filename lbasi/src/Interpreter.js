class Interpreter {
  visit(node) {
    const method = `visit${node.constructor.name}`;
    return this[method](node);
  }

  visitBinOp(node) {
    switch (node.op.value) {
      case '+':
        return this.visit(node.left) + this.visit(node.right);
      case '-':
        return this.visit(node.left) - this.visit(node.right);
      case '*':
        return this.visit(node.left) * this.visit(node.right);
      case '/':
        return this.visit(node.left) / this.visit(node.right);
    }
  }

  visitUnaryOp(node) {
    return node.op.value === '+' ? this.visit(node.expr) : -this.visit(node.expr);
  }

  visitNum(node) {
    return node.value;
  }
}

module.exports = Interpreter;
