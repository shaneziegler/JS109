
function findFibonacciIndexByLength(inputLength) {
  let arr = [1n, 1n];
  while (String(arr[arr.length - 1]).length < inputLength) {
    arr.push(arr[arr.length - 2] + arr[arr.length -1]);
  }
  return inputLength == 1n ? 1n : BigInt(arr.length);  
}


function findFibonacciIndexByLengthR(inputLength) {
  if (inputLength == 1n) return 1n;
  let arr = [1n, 1n];

  let x = arr.reduce((acc, elm, idx, arr2) => {
    console.log(idx);
    arr.push(arr[idx] + arr[idx + 1]);
    // if (arr.length > 10) return;
  }, 0);


  // while (String(arr[arr.length - 1]).length < inputLength) {
  //   arr.push(arr[arr.length - 2] + arr[arr.length -1]);
  // }
  // return BigInt(arr.length);  
}

console.log(findFibonacciIndexByLength(1)); 
console.log(findFibonacciIndexByLength(1n)); 
console.log(findFibonacciIndexByLength(2)); 
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);