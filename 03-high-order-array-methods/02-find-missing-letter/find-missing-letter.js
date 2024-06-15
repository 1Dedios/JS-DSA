// create a called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array

const findMissingLetter = (array) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let startingIndex = alphabet.indexOf(array[0]);
  const loopLength = array.length;
  const endIndex = startingIndex + loopLength;
  let j = 0;

  // loop through alphabet - at startingindex
  // nested loop through array given
  // if array element given doesn't match the alphabet element return the element and end the loop

  for (let i = startingIndex; i < endIndex; i++) {
    if (alphabet[i] != array[j]) {
      return alphabet[i];
    }
    j++;
  }
};

module.exports = findMissingLetter;
