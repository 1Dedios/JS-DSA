const isPalindrome = require('./palindrome');

test('checking if a string is a palindromes', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('madam')).toBe(true);
  expect(isPalindrome('noon')).toBe(true);
  expect(isPalindrome('hey')).toBe(false);
});
