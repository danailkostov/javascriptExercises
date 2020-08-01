/*

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
For empty output return an empty list.

*/

// Code: 

function orderedCount(text) {
    'use strict';
    // create two empty arrays
    let arr = [];
    let checkArr = [];

    // loop through chars of text
    for(let char = 0; char < text.length; char++)    {
        // what happen inside of text
        let count = 0;
        // another loop through chars of text, so we can compare letters
        for(let compareChar = 0; compareChar < text.length; compareChar++)  {
            if(text[char] === text[compareChar])    count++;
        }
        // check if the letter is already counted in previous loops
        if(!checkArr.includes(text[char]))  {
            // add the result to arr
            arr.push([text[char], count])
        }
        // add which letter we use so we can check later
        checkArr.push(text[char]);
    }
    return arr;
  }


  console.log(orderedCount("233312")); //== [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);

// Tests:
    //["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
   // ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
   // ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],



