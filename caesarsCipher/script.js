/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation),but do pass them on.
*/

// Code:
function rot13(str) {
  // create variable to store all letters from alphabet - we will use them
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // create string to store the updated version
  let newStr = "";
  // just variable for input
  const input = str;
  // we loop through whole input(including white spaces and punctuation)
  for (let i = 0; i < input.length; i += 1) {
    const inputIndex = alphabet.indexOf(input[i]);
    // check if current character is actually letter from alphabet
    if (alphabet.includes(input[i])) {
      // make replacement logic for letters
      if (inputIndex >= 13) {
        newStr += alphabet[inputIndex - 13];
      } else {
        newStr += alphabet[inputIndex + 13];
      }
    } else {
      newStr += input[i];
    }
  }
  return newStr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

/*
Tests:
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

rot13("SERR CVMMN!") should decode to FREE PIZZA!

rot13("SERR YBIR?") should decode to FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
