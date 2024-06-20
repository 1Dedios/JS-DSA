// write a function that takes an array of strings as input and returns an array of arrays, where each sub-array contains words that are anagrams of each other.

const anagramGrouping = (arr) => {
  let anagramGroupings = new Map();

  arr.forEach((string) => {
    let stringArray = string.split('').sort().join('');

    if (anagramGroupings.has(stringArray)) {
      anagramGroupings.get(stringArray).push(string);
    } else {
      anagramGroupings.set(stringArray, [string]);
    }
  });
  return Array.from(anagramGroupings);
};

module.exports = anagramGrouping;
