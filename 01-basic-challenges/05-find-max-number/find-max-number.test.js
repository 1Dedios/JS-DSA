const maxNumber = require('./find-max-number');

test('finds the max number in an array', () => {
  expect(maxNumber([1, 2, 3, 4, 5])).toBe(5);
  expect(maxNumber([25, 10, 50, 44, 30])).toBe(50);
  expect(maxNumber([100, 130, 569, 394, 439])).toBe(569);
  expect(maxNumber([2100, 1100, 2300, 3330, 4005])).toBe(4005);
});
