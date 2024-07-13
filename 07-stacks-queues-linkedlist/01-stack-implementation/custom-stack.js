class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    if (this.isFull()) {
      return false;
    }

    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.top < 0) {
      return 'This stack has no members.';
    } else {
      return this.stack.pop();
    }
  }

  peek() {
    if (this.top < 0) {
      return 'This stack has no members.';
    } else {
      return `The stack's next member is ${this.stack[this.top]}`;
    }
  }

  isFull() {
    return this.stack.length === this.maxSize - 1;
  }
}

module.exports = Stack;
