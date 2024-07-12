const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

const hashResult = myHashTable._hash('John', myHashTable.limit);

myHashTable.set('John', 30);
// myHashTable.set('John', 20);
const secondHashResult = myHashTable._hash('Kelly', myHashTable.limit);
myHashTable.set('Kelly', 18);

console.log(hashResult);
console.log(myHashTable.print());

myHashTable.set('John', 20);

console.log(myHashTable.print());

myHashTable.set('Kelly', 21);

console.log(myHashTable.get('Kelly'));
