// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// Quick solution for JS109
function sumOfSums(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let z = 0; z <= i; z++) {
      total += arr[z];  
    }
  }
  console.log(total);
}

// Took a while for figure double reduce solution
function sumOfSums(arr) {
  return arr.reduce((a, _, idx) => a + arr.slice(0, idx + 1).reduce((a, b) => a + b));
}


// My old solutiont from JS101
function sumOfSums(arr) {
  let sum = 0;
  return arr.map(elm => sum += elm).reduce((acc, elm) => acc + elm, 0);
}