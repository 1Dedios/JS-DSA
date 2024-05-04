const titleCase = require('./title-case');

test('should capitalize the first letter of every word', () => {
  expect(titleCase('should capitalize the first letter of every word')).toBe(
    'Should Capitalize The First Letter Of Every Word'
  );
  expect(titleCase('the brown fox jumped over the lazy dog')).toBe(
    'The Brown Fox Jumped Over The Lazy Dog'
  );
  expect(titleCase('i love my children')).toBe('I Love My Children');
});
