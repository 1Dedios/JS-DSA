const helloWorld = require('./hello-world');

test('returns Hello World as a string', () => {
  expect(helloWorld()).toBe('Hello World!');
});
