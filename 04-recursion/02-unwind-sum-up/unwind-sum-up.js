// write a recursive function that sums up to a given number

const recursiveSumUp = (n) => {
  // base case return n
  if (n == 0) {
    return n;
  } else {
    return n + recursiveSumUp(n - 1);
  }
};

module.exports = recursiveSumUp;
