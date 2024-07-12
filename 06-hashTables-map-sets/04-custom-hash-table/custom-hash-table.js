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
      /**
       *
       * So this was implemented by Traversy Media by iterating over the hash table and returning it.
       * I simply just returned the value because if it were not present then the first if condition would have caught it. Going through the hashtable when you were given the key is not as optimal as going straight to the value. The first approach is definitely O(n) while the approach I implemented is constant time O(1). Of course, my approach can degrade to O(n) overtime with a large enough hash table handling collisions. As you can see currently my hash table does not handle collisions.
       */
      console.log(`${this.storage[index][0][1]}`);
    }
  }

  remove(key) {
    this.set(key, null);
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

  has(key) {
    return this.has(key);
  }

  size() {
    return this.storage.length;
  }
}

module.exports = HashTable;
