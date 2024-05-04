// Take a string and reverse it

const reverseString = (str) => {
  // convert to array
  // create a new empty array
  // loop through the array from the end and enter them into the new array
  // join the newly filled array and return it

  let stringArray = str.split(' ');
  let backwardsArray = [];
  let backwardsArrayCount = 0;

  for (let i = -1; i > -stringArray.length; i++) {
    backwardsArray[backwardsArrayCount] = stringArray[i];
    backwardsArrayCount++;
  }
  console.log(backwardsArray.join(''));

  return backwardsArray.join(' ');
};

module.exports = reverseString;
