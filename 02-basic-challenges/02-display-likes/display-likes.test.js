const displayLikes = require('./display-likes');

test('should display formatted liked sentences depending on the number of names in a given array', () => {
  expect(displayLikes(['Eddie', 'Ellie', 'Jessica'])).toStrictEqual(
    'Eddie and Ellie and Jessica like this'
  );
  expect(displayLikes(['Eddie', 'Ellie'])).toStrictEqual(
    'Eddie and Ellie like this'
  );
  expect(displayLikes(['Eddie'])).toStrictEqual('Eddie likes this');
  expect(
    displayLikes([
      'Eddie',
      'Ellie',
      'Jessica',
      'Marlon',
      'Future',
      'MetroBoomin',
    ])
  ).toStrictEqual('Eddie, Ellie and 4 others like this');
});
