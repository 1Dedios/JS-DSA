// write function that finds the maxSubarray - it takes an array of ints and a positive integer, k, the functions should
// find the max sum of any subarray of length k using an O(n) solution with the sliding window technique.

const maxSubarraySum = (arr, k) => {
  // create pointers - prev, next - these are the lower bounds of each window
  // prev < k , next <= k + prev - these are the upper bounds each window
  // create maxSum var
  // loop through first window and add to maxSum
  // create subMaxSum var - loop through second window and add to subMaxSum
  // if subMaxSum > maxSum swap
  // increase both pointers and repeat

  let prev = 0;
  let next = 1;
  let maxSum = 0;

  while (next < arr.length) {
    for (let i = prev; i < k; i++) {
      maxSum += arr[i];
    }
    for (let j = next; j <= k + prev; j++) {
      let subarraySum = 0;
      subarraySum += arr[j];

      if (subarraySum > maxSum) {
        maxSum = subarraySum;
      }
    }
    prev++;
    next++;
  }

  // return maxSubarray

  return maxSum;
};

module.exports = maxSubarraySum;
