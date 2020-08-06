/*
Flatten a nested array. You must account for varying levels of nesting.
*/

// Code:
function steamrollArray(arr) {
  // create variable to store the result
  const newArr = [];
  // Recursive function to loop through original array and subarrays of it.
  function flat(array) {
    array.forEach((element) => {
      if (!Array.isArray(element)) {
        newArr.push(element);
      } else {
        flat(element);
      }
    });
  }

  flat(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

/*
Tests:
    steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
    steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
    steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
    steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/
