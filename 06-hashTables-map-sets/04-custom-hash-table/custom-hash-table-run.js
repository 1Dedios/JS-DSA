const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

const hashResult = myHashTable._hash('John', myHashTable.limit);

myHashTable.set('John', 30);

console.log(hashResult);
console.log(myHashTable.has('John'));
