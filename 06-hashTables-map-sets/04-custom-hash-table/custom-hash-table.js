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
    let index = this._hash(key, this.limit);

    if (index === undefined) {
      console.log('Unable to find');
    } else {
      if (this.storage[index]) {
        if (
          this.storage[index].length === 1 &&
          this.storage[index][0][0] === key
        ) {
          return `The value of ${key} is ${this.storage[index][0][1]}`;
        } else {
          for (let i = 0; this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
              return `The value of ${key} is ${this.storage[index][i][1]}`;
            }
          }
        }
      }
    }
  }

  remove(key) {
    let index = this._hash(key, this.limit);

    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
        return `${key} has been successfully removed.`;
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i] === key) {
            delete this.storage[index][i];
            return `${key} has been successfully removed.`;
          }
        }
      }
    } else {
      return `${key} does not exist in this hashtable.`;
    }
  }

  has(key) {
    let index = this._hash(key, this.limit);

    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        return this.storage[index][0][0] === key;
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            return this.storage[index][i][0] === key;
          }
        }
      }
    } else {
      return this.storage[index] === key;
    }
  }

  size() {
    return this.storage.length;
  }

  print() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] != undefined) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i}: undefined`);
      }
    }
  }
}

module.exports = HashTable;
