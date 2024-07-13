const HashTable = require('./custom-hash-table');

/**
 * Testing for the following:
 * - set()
 * - get()
 * - remove()
 * - has()
 * - size()
 * - print()
 */

const hashtable = new HashTable();

// set() testing
const setResult1 = hashtable.set('foo', 'bar');
const setResult2 = hashtable.set('John', 22);

test('testing the creation of hashed key and value pairs', () => {
  expect(hashtable.set('foo', 'bar')).toBe(setResult1);
  expect(hashtable.set('John', 22)).toBe(setResult2);
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
  //   expect().toBe();
});
