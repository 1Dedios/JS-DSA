// count how many vowels in a string

const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let counter = 0;
  let strArray = str.toLowerCase().split('');

  for (let i = 0; i < strArray.length; i++) {
    if (vowels.includes(strArray[i])) {
      counter++;
    }
  }

  return counter;
};

module.exports = countVowels;
