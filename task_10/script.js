/*
Given a positive integer num, return the sum of all odd
Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd
Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

// Code:
function sumFibs(num) {
  // create fibonacchi exp. from num
  let previousNum = 0;
  let currentNum = 1;
  let tempResult = 0;
  const array = [];
  for (let i = 0; currentNum <= num; i++) {
    tempResult = currentNum;
    currentNum += previousNum;
    previousNum = tempResult;
    array.push(tempResult);
  }

  // sumarize odd numbers
  const result = array
    .filter((x) => x % 2 !== 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return result;
}

sumFibs(4);

/* Tests:
    sumFibs(1) should return a number.
    sumFibs(1000) should return 1785.
    sumFibs(4000000) should return 4613732.
    sumFibs(4) should return 5.
    sumFibs(75024) should return 60696.
    sumFibs(75025) should return 135721.
*/
