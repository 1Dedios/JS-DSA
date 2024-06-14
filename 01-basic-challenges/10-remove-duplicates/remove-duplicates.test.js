const removeDuplicates = require('./remove-duplicates');

test('given an array with duplicates it should return a new array without duplicates', () => {
  expect(removeDuplicates(['a', 'b', 'c', 'a'])).toStrictEqual(['a', 'b', 'c']);
  expect(
    removeDuplicates(['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'g'])
  ).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
});
