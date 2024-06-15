// write a function called sumOfEvenSquares that takes an array of numbers and returns the sum of the squares of the even numbers in the array.

const sumOfEvenSquares = (array) => {
  // loop through array - using javascript built-in methods
  // for each element check if it's even, - if it is then square the element and add to a sum variable
  // return sum variable
  let sum = 0;

  array.forEach((e) => {
    if (e % 2 == 0) {
      sum += e ** 2;
    }
  });

  return sum;
};

module.exports = sumOfEvenSquares;
