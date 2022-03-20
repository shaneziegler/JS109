// // You are given an array of strings and an integer k.
// // Your task is to return the first longest string consisting of k
// // consecutive strings taken from the array.

// // Example: 

// // longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// // "abigailtheta"

// // n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// // Test Cases
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

function commonPrefix(arr, pre) {
  return arr.every(word => word.slice(0, pre.length) === pre);
}


console.log(commonPrefix(['florida', 'flower', 'flakey'] , 'fl'));
console.log(commonPrefix(['florida', 'flower', 'flakey'] , ''));
console.log(commonPrefix(['florida', 'flower', 'flakey'] , 'xx'));
console.log(commonPrefix(['throne', 'dungeun'] , ''));
console.log(commonPrefix(['throne'] , 'throne'));