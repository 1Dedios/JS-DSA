const findMissingLetter = require('./find-missing-letter');

test('given a string array, the function should return the missing letter', () => {
  expect(findMissingLetter(['X', 'Z'])).toBe('Y');
  expect(findMissingLetter(['D', 'E', 'G'])).toBe('F');
  expect(findMissingLetter(['A', 'B', 'C', 'E'])).toBe('D');
});
