const phoneNumberDirectory = require('./phone-directory');

const result = phoneNumberDirectory([
  'Eddie:212-549-5454',
  'Johnny:112-222-2233',
  'Gojo:112-222-8888',
]);

test('takes an array of phone numbers as input and returns a Map with names as keys and corresponding phone numbers as values', () => {
  expect(result instanceof Map).toBe(true);
});
