/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// Code:
function spinalCase(str) {
  // select whitespaces and underscores
  const wuregex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  const updStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // return final result
  return updStr.replace(wuregex, '-').toLowerCase();
}
console.log(spinalCase('thisIsSpinalTap'));

/*
Tests:

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
 */
