// write function that finds the maxSubarray - it takes an array of ints and a positive integer, k, the functions should
// find the max sum of any subarray of length k using an O(n) solution with the sliding window technique.

const maxSubarraySum = (arr, k) => {
  let ptr = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subMax = 0;
    ptr = i;
    while (ptr < k + i) {
      subMax += arr[ptr];
      ptr++;
    }
    if (subMax > maxSum) {
      maxSum = subMax;
    }
    //clearing submax
    subMax = 0;
  }

  return maxSum;
};

module.exports = maxSubarraySum;
