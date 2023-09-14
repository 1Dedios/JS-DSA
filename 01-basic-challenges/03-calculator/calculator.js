// write function taking three params: 2 numbers and an operator and it should return the calculation of said numbers and operator

const calculator = (number1, number2, operator) => {
  let solution;

  if (operator == '+') {
    solution = number1 + number2;
  } else if (operator == '-') {
    solution = number1 - number2;
  } else if (operator == '/') {
    solution = number1 / number2;
  } else if (operator == '*') {
    solution = number1 * number2;
  } else if (operator == '%') {
    solution = number1 % number2;
  } else {
    throw new Error('Not a valid operator in JavaScript');
  }
  return solution;
};

module.exports = calculator;
