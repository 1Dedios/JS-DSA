// write a function that takes in an array of names and returns a string of who likes the post.

/*
- if no one likes it, it should return 'no one likes this'
- if one person likes it, it should return '{name} likes this'
- if two people like it, it should return '{name} and {name2} like this'
- if three people like it, it should return '{name}, {name2} and {name3} like this'
- if more than three people like it, it should return '{name1}, {name2} and {x} others like this' */

const displayLikes = (arrayOfNames) => {
  if (arrayOfNames.length == 0) {
    return 'no one likes this';
  } else if (arrayOfNames.length == 1) {
    return `${arrayOfNames[0]} likes this`;
  } else if (arrayOfNames.length == 2) {
    return `${arrayOfNames[0]} and ${arrayOfNames[1]} like this`;
  } else if (arrayOfNames.length == 3) {
    return `${arrayOfNames[0]} and ${arrayOfNames[1]} and ${arrayOfNames[2]} like this`;
  } else {
    return `${arrayOfNames[0]}, ${arrayOfNames[1]} and ${
      arrayOfNames.length - 2
    } others like this`;
  }
};

module.exports = displayLikes;
