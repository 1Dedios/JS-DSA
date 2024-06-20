// write a function that takes an array of phone numbers as input and returns a map with names as keys and corresponding phone numbers as values.

const phoneNumberDirectory = (arr) => {
  // parse through the arr
  // convert each element to an array and map the name and phone number to the to the directory(map)
  let phoneNumberDirectory = new Map();

  arr.forEach((info) => {
    let infoArray = info.split(':');

    phoneNumberDirectory.set(infoArray[0], infoArray[1]);
  });

  return phoneNumberDirectory;
};

module.exports = phoneNumberDirectory;
