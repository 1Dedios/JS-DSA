const occurrences = require('./count-occurrences');

test('How many times does the character appear in the string', () => {
  expect(occurrences('hello', 'e')).toBe(1);
  expect(occurrences('occurrences', 'r')).toBe(2);
  expect(occurrences('pope', 'p')).toBe(2);
});
