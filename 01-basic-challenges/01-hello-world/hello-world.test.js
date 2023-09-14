const helloWorld = require('./hello-world-run');

test('returns Hello World as a string', () => {
  expect(helloWorld()).toBe('Hello World!');
});
