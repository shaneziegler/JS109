// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

// #Examples:

// *Example 1*
// SubstringTest("Something","Fun"); //Returns false

// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

// #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
// We only count substrings that are > 1 in length.

// #Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.


/*
Input: two strings or lower and uppercase letters

Output: boolean true or false

Examples/Edge Cases/Rules
substring must be atleast 2 chars long
case-insensitive

Algorithm
if either input string length is less than 2 then return false
reassign both input strings to lowercase versions

// implement a sliding window over input string1 - return true if ANY 2 char long or more substring from str1 is foudn in str2
iterate over input string1 indexs from 0 to last character - 1 (since min substr len is 2) - startingPos
  loop from current startingPos to length of input string1 - endingPos
    create substr for compare by slicing substr out of input string1 - starting at startingPos up to endingPos
      if the substr is found in input string 2 then return true

return false if we got to the end
*/

function substringTest(str1, str2) {
  if (str1.length < 2 || str2.length < 2) return false;
  
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  for (let startPos = 0; startPos < str1.length - 1; startPos++) {
    for (let endPos = startPos + 2; endPos < str1.length + 1; endPos++) {
      let subStr = str1.slice(startPos, endPos);
      // console.log(subStr);
      if (str2.includes(subStr)) return true;
    }
  }
return false;
}


console.log(substringTest("Something", "Home")); // true
console.log(substringTest("Something","Fun"));  //  false          
console.log(substringTest("STBrIOsdHxnyYuxmjmEBZNFJ sV", "IqG ggysY BHUXVKIgnoxRYxCNB"));          // true
console.log(substringTest("", "")); // false
console.log(substringTest("", "Home")); // false
console.log(substringTest("Something", "")); // false    
console.log(substringTest("Something", "H")); // false
console.log(substringTest("banana", "BANANA")); // true          

