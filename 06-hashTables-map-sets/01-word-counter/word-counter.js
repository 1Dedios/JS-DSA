// write a function that a accepts a string and word and returns how many times that word appears in the string

const wordCounter = (string, word) => {
  const stringArray = string.split(' ');
  console.log(stringArray);
  let wordMap = new Map();

  for (let i = 0; i < stringArray.length + 1; i++) {
    if (!wordMap.has(stringArray[i])) {
      wordMap.set(stringArray[i], 1);
    } else {
      wordMap.set(stringArray[i], wordMap.get(stringArray[i]) + 1);
    }
  }

  return wordMap.get(word) ? wordMap.get(word) : null;
};

module.exports = wordCounter;
