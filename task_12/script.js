/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

 */

// Code:
function smallestCommons(arr) {
  // needed variables
  const rangeNums = [];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let bool = true;
  let result;

  // make array with missing numbers from the given range
  for (let i = min; i <= max; i += 1) {
    rangeNums.push(i);
  }
  // check for the smallen common multiple and return the result
  for (let i = max + 1; bool; i += 1) {
    if (rangeNums.every((x) => i % x === 0)) {
      result = i;
      bool = false;
    }
  }
  return result;
}

smallestCommons([5, 1]);

/*

Tests:
    smallestCommons([1, 5]) should return a number.
    smallestCommons([1, 5]) should return 60.
    smallestCommons([5, 1]) should return 60.
    smallestCommons([2, 10]) should return 2520.
    smallestCommons([1, 13]) should return 360360.
    smallestCommons([23, 18]) should return 6056820.

 */
