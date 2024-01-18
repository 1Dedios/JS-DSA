// takes an array of numbers and returns the largest number

const maxNumber = (arr) => {
  let maxNum = Math.max(...arr);
  return maxNum;
};

module.exports = maxNumber;
