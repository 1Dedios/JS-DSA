// function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

// param - string, character
// returns number of occurrences of the character in the string

const countOccurrences = (string, character) => {
  //loop through the string - easiest way by splitting the string
  //if string[i] === character add it to a counter variable
  // return counter variable.

  let counter = 0;
  let splitString = string.split('');

  for (let i = 0; i < splitString.length; i++) {
    if (character == splitString.length[i]) {
      counter++;
    }
  }
  return counter;
};

module.exports = countOccurrences;
