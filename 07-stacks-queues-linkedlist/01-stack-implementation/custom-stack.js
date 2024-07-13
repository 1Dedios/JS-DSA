class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    if (isFull()) {
      return false;
    }

    this.top++;
    this.storage[this.top] = value;
    return true;
  }

  isFull() {
    return this.storage.length === this.maxSize - 1;
  }
}
