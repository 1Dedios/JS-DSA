// creating a class

class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  _hash(key, max) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  set(key, val) {
    let index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, val]];
    } else {
      let isInserted = false;

      // this is checking for collisions
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = val;
          isInserted = true;
        }
      }

      if (!isInserted) {
        this.storage[index].push([key, val]);
      }
    }
  }

  get(key) {
    return this.get(key) || null;
    // return this.storage[key] || null;
  }

  remove(key) {
    this.set(key, null);
  }

  print() {
    return this.storage;
  }

  print() {
    return this.storage;
  }

  has(key) {
    return this.has(key);
  }

  size() {
    return this.storage.length;
  }
}

module.exports = HashTable;
