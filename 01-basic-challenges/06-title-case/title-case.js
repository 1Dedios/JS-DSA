// write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized

const titleCase = (str) => {
  // iterate through string
  // capitalize the first letter of the string
  // if current element is a space then capitalize the next letter and increase loop by one
  // return the string

  let array_of_string = str.split('');

  console.log(array_of_string);

  for (let i = 0; i < array_of_string.length; i++) {
    if (i === 0) {
      array_of_string[i].toUpperCase();
    }

    if (array_of_string[i] == ' ') {
      array_of_string[i + 1].toUpperCase();
    }
  }

  let capString = array_of_string.join(' ');
  console.log(capString);
  return capString;
};

module.exports = titleCase;
