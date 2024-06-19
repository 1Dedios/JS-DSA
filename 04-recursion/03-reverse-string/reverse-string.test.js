const recursiveStringReverse = require('./reverse-string');

test('recursively return a string backwards', () => {
  expect(recursiveStringReverse('hello')).toStrictEqual('olleh');
  expect(recursiveStringReverse('world')).toStrictEqual('dlrow');
  expect(recursiveStringReverse('choosy')).toStrictEqual('ysoohc');
  expect(recursiveStringReverse('mad')).toStrictEqual('dam');
  expect(recursiveStringReverse('porsche')).toStrictEqual('ehcsrop');
  expect(recursiveStringReverse('toyota')).toStrictEqual('atoyot');
  expect(recursiveStringReverse('mercedes')).toStrictEqual('sedecrem');
  expect(recursiveStringReverse('mclaren')).toStrictEqual('neralcm');
  expect(recursiveStringReverse('honda')).toStrictEqual('adnoh');
});
