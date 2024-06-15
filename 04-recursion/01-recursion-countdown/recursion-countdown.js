// write a recursive function that counts down from n.

const recursiveCountDown = (n) => {
  if (n == 0) {
    return 0;
  } else {
    console.log(n);
    return recursiveCountDown(n - 1);
  }
};

module.exports = recursiveCountDown;
