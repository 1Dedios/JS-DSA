const countVowels = require('./count-vowels');

test('testing to get the correct number of vowels in a string', () => {
  expect(countVowels('hello')).toBe(2);
  expect(countVowels('apple')).toBe(2);
  expect(countVowels('none')).toBe(2);
  expect(countVowels('expeditious')).toBe(6);
  expect(countVowels('superb')).toBe(2);
  expect(countVowels('kilometer')).toBe(4);
});
