// write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized

const titleCase = (str) => {
  let array_of_string = str.split(' ');
  // let array_of_string = str.split('');

  for (let i = 0; i < array_of_string.length; i++) {
    /* THE CODE THAT'S BEEN COMMENTED OUT IS ONE IMPLEMENTATION THAT WORKS IN O(n) */
    //   if (i === 0) {
    //     array_of_string[i] = array_of_string[i].toUpperCase();
    //   }

    //   if (array_of_string[i] == ' ') {
    //     array_of_string[i + 1] = array_of_string[i + 1].toUpperCase();
    //   }
    // }

    // let capString = array_of_string.join(' ');

    // return capString;

    array_of_string[i] =
      array_of_string[i].charAt(0).toUpperCase() + array_of_string[i].slice(1);
  }

  let sentence = array_of_string.join(' ');

  return sentence;
};

module.exports = titleCase;
