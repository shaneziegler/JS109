// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

//! First version uses object to count occurrences
//! Second version uses a holder string initially based off the first string in the input array and then removes chars from it when not found

/*
Input:  an array of words

Output: an array of letters

Examples/Edge Cases

Algorithm
Create an occurrences array of objects occurrences for each string
remove first element and put into main compare object

iterate over properties in compareobj
  iterate over rest of objects in occurarray
    if compareobj property is not in curr occurobject then delete prop from compareobj
    else if value of occurobj propertry < value of compareobj property then 
      compareobj value = occurobj value
      

// build an output array from whats left of the compareobj
create output array
iterate over properties in compare object
  get property value, which is number of times to put the property/char into the output array
  push that property key into the output array that many times
  
return output array
*/

// text.split(searchtext).length - 1 /

function commonChars(arr) {
  let outArr = [];
  let countArr = [];
  
  while (arr.length > 0) {
    let firstElm = arr.shift().split('').reduce((obj, char) => {
                   obj[char] ? obj[char]++ : obj[char] = 1;
                   return obj;
                  }, {});

    countArr.push(firstElm);
  }
  
  let firstObj = countArr.shift();

  for (let prop in firstObj) {
    countArr.forEach(currObj => {
      if (firstObj[prop] > currObj[prop]) {
        firstObj[prop] = currObj[prop];
      } else if (!currObj[prop]) {
        delete firstObj[prop];
      }
    });
  }
  
  Object.entries(firstObj).forEach(arr => {
    for (let i = arr[1]; i; i--) {
      outArr.push(arr[0]);
    }
  });
  return outArr;
}

console.log(commonChars(["bella","label","roller"])); // ["e","l","l"]
console.log(commonChars(["cool","lock","cook"])); //' ["c","o"]

//!  SECOND VERSION

/*
Input:  an array of words

Output: an array of letters

Examples/Edge Cases

Algorithm
get first array strings - called firstStr remove from input array
create charsStr

loop while input array length > 0
  set charsStr = '';
  remove first elm from input array and assign to compareStr
  iterate over chars in firstStr - char
    if firstStr - char in compareStr
      then add to charStr and remove from compareStr
    else if firstStr - char not in compareStr
      then remove char from firstStr - char
  reassign firstStr to charsStr   
  

turn charsStr into and array
return charsSTr array

*/

// text.split(searchtext).length - 1 /

function commonChars(arr) {
  let firstStr = arr.shift();
  let charsStr;
  
  while (arr.length > 0) {
    charsStr = '';
    let compareStr = arr.shift();
    for (let i = 0; i < firstStr.length; i++) {
      if (compareStr.includes(firstStr[i])) {
        charsStr += firstStr[i];
        let charPos = compareStr.indexOf(firstStr[i]);
        compareStr = compareStr.slice(0, charPos) + compareStr.slice(charPos + 1);
      } else {
        firstStr = firstStr.slice(0, i) + firstStr.slice(i + 1);    
        i--;
      }
    } // for loop
    firstStr = charsStr;
    // console.log(firstStr);
  } // while loop
  
  return charsStr.split('');
}

console.log(commonChars(["bella","label","roller"])); // ["e","l","l"]
console.log(commonChars(["cool","lock","cook"])); //' ["c","o"]


function commonChars(arr) {
  let result = [];
  if (!arr.length) return result;
  
  let sortedArr = arr.sort((a, b) => a.length - b.length);
  // console.log(sortedArr);
  
  let firstElement = sortedArr.shift();
  
  [...firstElement].forEach(char => {
    if (sortedArr.every(word => word.includes(char))) {
      result.push(char);
      sortedArr = sortedArr.map(word => {
        let idx = word.indexOf(char);
        return word.slice(0, idx) + word.slice(idx + 1);
      });
    }
  });
  
  // console.log(result);
  return result;
}