// write function that takes an array and returns a new array with duplicates removed.

const removeDuplicates = (array) => {
  // return a new array from a set
  // ANOTHER POSSIBLE SOLUTION: go through given array and if not found in the new array add it then return the new array - using Array.includes()

  return Array.from(new Set(array));
};

module.exports = removeDuplicates;
