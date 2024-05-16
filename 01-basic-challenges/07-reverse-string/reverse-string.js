// Take a string and reverse it

const reverseString = (str) => {
  // convert to array
  // create a new empty array
  // loop through the array from the end and enter them into the new array
  // join the newly filled array and return it

  let stringArray = str.split('');
  let backwardsArray = [];
  let backwardsArrayIndex = 0;

  if (str === ' ' || str === '') {
    return str;
  }

  for (let i = stringArray.length - 1; i >= 0; i--) {
    backwardsArray[backwardsArrayIndex] = stringArray[i];
    backwardsArrayIndex++;
  }

  return backwardsArray.join('');
};

module.exports = reverseString;
