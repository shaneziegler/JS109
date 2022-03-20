// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil


/*
Input:  a year as an integer

Output: an integer representing the next year with all the same digits as the input year 
-1 if there isnt one

Examples/Edge Cases/Rules
if there isnt' one then return -1
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 2017) // returns 2071
if input is only 1 digit then return - 1 - below will take car of this
if input sorted decending order === input then cant be any more so return -1

Algorithm - brute force
take input year turn into a string 
reverse that string - using an array temp
save this string for later as `sortedInputYear`
turn that strign back into a number
compare that number with input year nunber, if the same then return -1

set compareyear to input year plus 1
loop until sortedInputYear === compareyear turned into a string and reverse sorted

return compareyear


Algo - NOT brute force
// find farthest right digit for which there is a lower number digit in the rest of the number
turn input year into an array
iterate over the array from right to left - `curridx`
//  if slice of array from 0 to `curridx` - 1 includes a lower number then get that index spot
  set testDigit = array.length -1 elment value
  iterate over rest of array from curridx to to 0 index until a lower number digit is found - `insertIdx`
    if none, then move onto next digit from end
if we got to index and none found then return -1 ?
// once we find that digit move on

insert our testDigit infront of insertIdx

create partial copy of array from 0 to insertidx - frontArr
creat partial copy of array from insertidx + to end of array = backArr
sort backArr ascending
combine frontArr + backArr
turn into a number and return it
*/

function nextBiggerBruteForce(year) {
  let sortedInputYear = String(year).split('').sort().reverse().join('');

  if (year === Number(sortedInputYear)) return -1;
  
  let compareYear = year + 1;
  
  while (sortedInputYear !== String(compareYear).split('').sort().reverse().join('')) {
    compareYear += 1;
  }
  return compareYear;
}

function getInsertPos(arr) {
  if (String(arr) === String(arr.slice().sort().reverse())) return -1;
  // console.log(arr);
  arr = arr.slice().reverse();
  // console.log(arr);
  
  let lastDigitIdx = 0;
  while (arr.slice(lastDigitIdx).findIndex(num => num < arr[lastDigitIdx]) < 0) {
  // console.log('lastdigitindex: ' + lastDigitIdx + '  arr[lastdigitindex]: '+ arr[lastDigitIdx]);
    
    lastDigitIdx += 1; 
  }
  
    // console.log('after while loop lastdigitindex: ' + lastDigitIdx + '  arr[lastdigitindex]: '+ arr[lastDigitIdx]);
  
  let foundIdx = arr.slice(lastDigitIdx).findIndex(num => num < arr[lastDigitIdx]) + lastDigitIdx;
  // console.log('foundIdx: ' + foundIdx + '  arr[foundIdx]: ' + arr[foundIdx]);
  foundIdx = arr.length - foundIdx - 1;
  // console.log('foundIdx after adjustment: ' + foundIdx)

  return {insertPos: foundIdx, lastDigitIdx: arr.length - 1 - lastDigitIdx};
}

function nextBigger(year) {
  let yearArr = String(year).split('');
  let insertObj = getInsertPos(yearArr);
  if (insertObj === -1) return -1;
  let insertDigit = yearArr[insertObj.lastDigitIdx];

  yearArr.splice(insertObj.lastDigitIdx, 1);
  let frontArr = yearArr.slice(0, insertObj.insertPos).concat(insertDigit);
  let backArr = yearArr.slice(insertObj.insertPos);

  backArr.sort((a, b) => a - b);
  return Number(frontArr.concat(backArr).join(''));
  }

// console.log(nextBigger(12)); // ,21)
// console.log(nextBigger(21)); // ,-1)
// console.log(nextBigger(513)); // ,531)
// console.log(nextBigger(2017)); // ,2071)
// console.log(nextBigger(414)); // ,441)
// console.log(nextBigger(144)); // ),414)
// console.log(nextBigger(938265737760)); //    938265760377
// console.log(nextBigger(938265737210)); //    938265770123
console.log(nextBigger(4582 89741)); //   4582 91478  // 458412789 to equal 458291478