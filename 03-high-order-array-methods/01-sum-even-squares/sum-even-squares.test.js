const sumEvenSquares = require('./sum-even-squares');

test('takes an array and outputs the sum of the squares of the even numbers in the array', () => {
  expect(sumEvenSquares([2, 3, 4, 4, 5, 10])).toBe(136);
  expect(sumEvenSquares([2, 3, 4, 5, 10])).toBe(120);
  expect(sumEvenSquares([2, 3, 4, 12])).toBe(164);
  expect(sumEvenSquares([2, 11, 4, 4, 100])).toBe(10036);
  expect(sumEvenSquares([2, 6, 14, 5, 10])).toBe(336);
});
