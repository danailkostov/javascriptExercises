/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined
*/

// Code:

function addTogether(...args) {
  // check if argument is number
  const checkNumbers = function checkNumbers(num) {
    if (typeof num !== 'number') {
      return undefined;
    }
    return num;
  };

  // if there are at least two arguments
  if (args.length > 1) {
    const num1 = checkNumbers(args[0]);
    const num2 = checkNumbers(args[1]);
    if (num1 === undefined || num2 === undefined) {
      return undefined;
    }
    return num1 + num2;
  }
  // if it is one argument
  const num3 = args[0];
  if (checkNumbers(num3)) {
    return function x(num4) {
      if (checkNumbers(num4) === undefined) {
        return undefined;
      }
      return num3 + num4;
    };
  }
}

// Tests: //
addTogether(2)(3); // Should Return 5
