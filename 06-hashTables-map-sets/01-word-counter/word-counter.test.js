const wordCounter = require('./word-counter');

test('accepts a string and a word and returns the frequency of occurrence of the word in the string', () => {
  expect(
    wordCounter('The lazy fox jumped over the other lazy fox', 'fox')
  ).toBe(2);
  expect(
    wordCounter(
      'where all my people at, I said where where are all my people at',
      'where'
    )
  ).toBe(3);
  expect(
    wordCounter(
      'why is it that I always have to repeat repeat repeat repeat myself',
      'repeat'
    )
  ).toBe(4);
  expect(wordCounter('my birthday is tomorrow tomorrow', 'tomorrow')).toBe(2);
  expect(wordCounter('I have nothing to say', 'say')).toBe(1);
  expect(wordCounter('name is dedios', 'dedios')).toBe(1);
  expect(wordCounter('hello', 'world')).toBe(null);
});
