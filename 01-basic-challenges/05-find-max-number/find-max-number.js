// TAKE AN ARRAY OF NUMBERS AND RETURN THE HIGHEST VALUE

const maxNumber = (arr) => {
  let maxNum = Math.max(...arr);
  return maxNum;
};
// ANOTHER WAY TO SOLVE:

const findMaxNumber = (arr) => {
  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
};

const findMaxDifferentImplementation = (arr) => {
  let maxNumber = arr[0];

  for (const element of arr) {
    if (element > maxNumber) {
      maxNumber = element;
    }
  }

  return maxNumber;
};

module.exports = findMaxDifferentImplementation;
