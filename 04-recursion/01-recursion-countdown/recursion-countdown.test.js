const recursiveCountDown = require('./recursion-countdown');

test('recursiveCountDown function', () => {
  expect(recursiveCountDown(5)).toBe(0);
  expect(recursiveCountDown(10)).toBe(0);
  expect(recursiveCountDown(3)).toBe(0);
  expect(recursiveCountDown(4)).toBe(0);
  expect(recursiveCountDown(8)).toBe(0);
});
