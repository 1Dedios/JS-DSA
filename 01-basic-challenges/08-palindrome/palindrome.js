// return boolean for isPalindrome if the argument is a palindrome.

const isPalindrome = (str) => {
  // normalize string - all lowercase characters
  // convert to an array
  // create start pointer
  // create end pointer
  // compare pointers - until halfway through the length of the array
  // if pointers != pointers return false break loop
  // return true

  let stringArray = str.toLowerCase().split('');

  let end = stringArray.length - 1;

  for (let i = 0; i < stringArray.length / 2; i++) {
    if (stringArray[i] != stringArray[end]) {
      return false;
    }

    end -= 1;
  }

  return true;
};

module.exports = isPalindrome;
