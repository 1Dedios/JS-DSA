const calculator = require('./calculator');

test('Takes two numbers and an operator as arguments and returns calculation of the numbers with the operator', () => {
  expect(calculator(2, 3, '+')).toBe(5);
  expect(calculator(2, 5, '*')).toBe(10);
  expect(calculator(12, 2, '/')).toBe(6);
  expect(calculator(12, 2, '%')).toBe(0);
  // expect(calculator(2, 3, x)).toBe('Not a valid operator in JavaScript');
});
