const reverseString = require('./reverse-string');

test('takes a string and returns the reverse of that string', () => {
  expect(reverseString('Hello World')).toBe('World Hello');
  expect(reverseString('My pets name is Coco.')).toBe('Coco is name pets My');
});
