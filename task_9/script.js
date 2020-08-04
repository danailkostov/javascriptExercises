/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
*/

// Code:

function convertHTML(str) {
  // convert initial string to array
  const strArr = str.split(''); // join('')
  // check for all letters
  for (let i = 0; i < strArr.length; i += 1) {
    switch (strArr[i]) {
      case '&':
        strArr[i] = '&amp;';
        break;
      case '<':
        strArr[i] = '&lt;';
        break;
      case '>':
        strArr[i] = '&gt;';
        break;
      case '"':
        strArr[i] = '&quot;';
        break;
      case "'":
        strArr[i] = '&apos;';
        break;
      default:
        break;
    }
  }
  const updatedStr = strArr.join('');
  return updatedStr;
}

console.log(convertHTML('Dolce & Gabbana'));
