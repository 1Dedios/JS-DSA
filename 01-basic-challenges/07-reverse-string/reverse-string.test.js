const reverseString = require('./reverse-string');

test('takes a string and returns the reverse of that string', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
  expect(reverseString('My pets name is Coco.')).toBe('.ocoC si eman step yM');
});
