/*
Problem

Lilah has a string, s , of lowercase English letters that she repeated infinitely many times.
Given an integer, n , find and print the number of letter a's in the first n letters
of Lilah's infinite string.
For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac,
the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Input Format

The first line contains a single string, s.
The second line contains an integer, n.

Output Format

Print a single integer denoting the number of letter a's in the first n letters of the infinite
 string created by repeating s infinitely many times.
*/

function repeatedString(s, n) {
  const initA = s.split("").filter((item) => item === "a").length;
  const dif = n % s.length;
  const multiple = Math.trunc(n / s.length);
  const leftover = Math.abs(s.length * multiple - n);
  const initAleftover = s
    .split("")
    .slice(0, leftover)
    .filter((item) => item === "a").length;

  if (!s.includes("a")) {
    return 0;
  }

  if (dif === 0) {
    return Math.round(initA * multiple);
  }

  return Math.round(initA * multiple + initAleftover);
}

//console.log(repeatedString('aba', 10));
//console.log(repeatedString("gfcaaaecbg", 547602));
//console.log(repeatedString('ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt', 685118368975));
//console.log(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570));
//console.log(repeatedString('aab', 882787));
