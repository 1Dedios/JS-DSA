// write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e, the common elements that appear in both array)

const arrayIntersection = (array1, array2) => {
  // create a new array
  // loop through the smallest array if the element is found in the other array as well then add to new array
  let intersectionArray = [];

  const firstArrayLength = array1.length;
  const secondArrayLength = array2.length;

  if (firstArrayLength < secondArrayLength) {
    for (let i = 0; i < firstArrayLength; i++) {
      if (array2.includes(array1[i])) {
        intersectionArray.push(array2[i]);
      }
    }
  } else {
    for (let i = 0; i < secondArrayLength; i++) {
      if (array1.includes(array2[i])) {
        intersectionArray.push(array2[i]);
      }
    }
  }

  // return new array
  return intersectionArray;

  // ANOTHER WAY: is to to use the intersection() method that set has - so you would convert both arrays to sets and use the method returning the intersection. it's a matter of what you want the return value to be.
};

module.exports = arrayIntersection;
