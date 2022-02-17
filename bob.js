//8-2-22 Problems
// 1
// Problem Description
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

// Test Cases
console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true

// input - array of string - all lowercase
// output - boolean or empty string "" if no common

// iterate over each character in elements in array until left substring of string elements are no longer all equal 
// create empty compareString
// create boolean to keep track of if state
// create var to track idx
// loop
// - add next character to compareString
// - compare the compareString to each element up to current length of compare string
// - if all compare then keep looping
// - increment idx
// - if any are different, then set state boolean to false and remove last added char and end looping
// - return compareString

function commonPrefix(arr) {
  let compareString = '';
  let matching = true;
  let idx = 0;
  do {
    compareString += arr[0][idx];
    if (arr.filter(word => word.slice(0, idx + 1) === compareString).length !== arr.length) {
      matching = false;
      compareString = compareString.slice(0, compareString.length - 1);
    }
    idx++;
  } while (matching && idx < arr[0].length)
  return compareString;
}