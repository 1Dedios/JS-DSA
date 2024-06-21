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
    this.set(key, val);
  }

  get(key) {
    return this.get(key) || null;
  }

  remove(key) {
    this.set(key, null);
  }

  has(key) {
    return this.has(key) || false;
  }

  size() {
    return this.storage.length;
  }
}

module.exports = HashTable;
