// write a recursive fibonacci sequence - it takes the number of cycles as arg and returns the fib #
// fibonacci starting with 1 and 1 are added together displayed and the previous two get added and displayed

const recursiveFibonacci = (n) => {
  // base case
  let fibArray = [0, 1];
  let i = 0;
  let j = 1;

  if (n < 1) {
    return n;
  }
  let fibNum = fibArray[i++] + fibArray[j++];
  fibArray.push(fibNum);

  return recursiveFibonacci(n - 1) + fibNum;
};

module.exports = recursiveFibonacci;
