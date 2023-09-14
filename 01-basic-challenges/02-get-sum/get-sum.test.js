const getSum = require('./get-sum');

test('Accepts two numbers and returns their sum', () => {
  expect(getSum(2, 3)).toBe(5);
});
