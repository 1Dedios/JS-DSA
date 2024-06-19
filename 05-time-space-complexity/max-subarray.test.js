const maxSubarraySum = require('./max-subarray');

test('should return maxSum of subarray of length k', () => {
  expect(maxSubarraySum([3, 3, 10, 3], 3)).toStrictEqual(16);
  expect(maxSubarraySum([2, 3, 5, 6, 23], 2)).toStrictEqual(29);
  expect(maxSubarraySum([22, 2, 11, 2], 3)).toStrictEqual(35);
  expect(maxSubarraySum([199, 200, 2, 10, 11, 2], 2)).toStrictEqual(399);
  expect(maxSubarraySum([10, 20, 30, 40, 50, 60, 70], 4)).toStrictEqual(220);
  expect(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual(21);
});
