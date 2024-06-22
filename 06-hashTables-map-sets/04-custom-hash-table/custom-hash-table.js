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

  print() {
    return this.storage;
  }

  // My attempts at creating the other methods
  set(key, val) {
    this.storage.push(set(key, val));
    // this.storage.push([key, val])
    // this.storage.push([this.set(key, val)])

    // I was completely off above lol

    // the index below is accessing the hash value to access the value in the array - of course to do this it requires a key
    let index = this._hash(key, this.limit)
  }

  get(key) {
    return this.get(key) || null;
    // return this.storage[key] || null;
  }

  remove(key) {
    this.set(key, null);
    // this.storage.push(set(key, null))
  }

  has(key) {
    return this.has(key) || false;
  }

  size() {
    return this.storage.length;
  }
}

module.exports = HashTable;
