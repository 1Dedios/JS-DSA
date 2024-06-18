const recursiveSumUp = require('./unwind-sum-up');

test('recursive function should take any number and sum up to given number', () => {
  expect(recursiveSumUp(5)).toStrictEqual(15);
  expect(recursiveSumUp(3)).toStrictEqual(6);
  expect(recursiveSumUp(4)).toStrictEqual(10);
  expect(recursiveSumUp(10)).toStrictEqual(55);
  expect(recursiveSumUp(7)).toStrictEqual(28);
  expect(recursiveSumUp(6)).toStrictEqual(21);
  expect(recursiveSumUp(12)).toStrictEqual(78);
  expect(recursiveSumUp(13)).toStrictEqual(91);
});
