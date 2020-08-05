/*
 A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
 For example, 2 is a prime number because it is only divisible by 1 and 2.
 In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

// Code:
function sumPrimes(num) {
  // storage array for prime numbers
  const array = [];
  // find prime numbers
  for (let i = 2; i <= num; i += 1) {
    let count = 0;
    for (let j = 1; j <= i; j += 1) {
      if (i % j === 0) count += 1;
    }
    if (count === 2) {
      array.push(i);
    }
  }
  // sumarize prime numbers
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
}

sumPrimes(977);

/*
  Tests:
    sumPrimes(10) should return a number.
    sumPrimes(10) should return 17.
    sumPrimes(977) should return 73156.
*/
