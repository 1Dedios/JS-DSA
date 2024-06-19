// write recursive function that takes a string and reverses it

const recursiveStringReverse = (str) => {
  if (str == '') {
    return '';
  }
  return recursiveStringReverse(str.substring(1)) + str.charAt(0);
};

module.exports = recursiveStringReverse;
