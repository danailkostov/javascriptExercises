/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. 
  
*/

// Code:

function fearNotLetter(str) {
    'use strict';
    // create alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // find the index of first letter of str
    let startIndex = alphabet.findIndex(element => element === str[0]);
    // find the index of last letter of str
    let endIndex = alphabet.findIndex(element => element === str[str.length - 1])
    // extract letters from alphabet
    let copy = alphabet.slice(startIndex, endIndex);
    // make initial str to array
    let strToArr = str.split('');
    // compare both arrays and return the difference
    let difference = copy.filter(x => !strToArr.includes(x)).join('');
    // check if we dont have difference
    if(difference === "") {
      return undefined;
    } else {
      return difference;
    }
  }
  
 //console.log(fearNotLetter("abce"));

  
// tests:
//fearNotLetter("abce") // should return "d".
//fearNotLetter("abcdefghjklmno") // should return "i".
//fearNotLetter("stvwx") // should return "u".
//fearNotLetter("bcdf") // should return "e".
//fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.




