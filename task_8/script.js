/*

Write a function that takes two or more arrays and returns a new array of
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in
their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the
final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

// Code:
function uniteUnique(...arr) {
  // we store all arguments in variable
  const arrays = arr;
  // concat all subarrays
  const newArray = arrays.toString().split(',');
  // update elements to Numbers
  const updateArray = newArray.map((x) => Number(x));
  // remove duplicates vie filter method
  const result = updateArray.filter((value, index, self) => self.indexOf(value) === index);
  // return final result
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* tests:

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

   */
