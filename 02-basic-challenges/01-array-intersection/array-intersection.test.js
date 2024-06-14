const arrayIntersection = require('./array-intersection');

test('should return an array wih elements that are found in both arrays', () => {
  expect(arrayIntersection(['a', 'b', 'c'], ['f', 'b', 'c'])).toStrictEqual([
    'b',
    'c',
  ]);
});
