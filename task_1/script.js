/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    let updatedArr = [];
    for(let i = 0; i < str.length; i++) {
      if(str.charAt(i) != 'a' &
         str.charAt(i) != 'e' &
         str.charAt(i) != 'i' &
         str.charAt(i) != 'o' &
         str.charAt(i) != 'u' &
         str.charAt(i) != 'A' &
         str.charAt(i) != 'E' &
         str.charAt(i) != 'I' &
         str.charAt(i) != 'O' &
         str.charAt(i) != 'U'
      ) {
        updatedArr.push(str.charAt(i));
      }
      
    }
     return updatedArr.join('');
  }
