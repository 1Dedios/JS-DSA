const wordCounter = require('./word-counter');

console.log(wordCounter('The lazy fox jumped over the other lazy fox', 'fox'));
console.log(
  wordCounter('The people in the house were once outside of the house', 'house')
);
