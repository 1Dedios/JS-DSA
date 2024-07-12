const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

//const hashResult = myHashTable._hash('John', myHashTable.limit);

myHashTable.set('John', 30);

//const secondHashResult = myHashTable._hash('Kelly', myHashTable.limit);
myHashTable.set('Kelly', 18);

//console.log(secondHashResult);
console.log(myHashTable.print());

myHashTable.set('John', 20);

console.log(myHashTable.print());

myHashTable.set('Kelly', 21);

console.log(myHashTable.get('Kelly'));

console.log(myHashTable.remove('kelp'));

console.log(myHashTable.remove('John'));

console.log(myHashTable.print());
console.log(myHashTable.size());
console.log(myHashTable.has('John'));
console.log(myHashTable.has('Kelly'));
console.log(myHashTable.has('kelp'));
