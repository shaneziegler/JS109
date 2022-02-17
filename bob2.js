

// 2
/*
Write a function called persistence that takes a single argument, a positive number.  The function should return the number argument's multiplicative persistence, 
which is the number of times you must multiply the digits in the number until the product is a single digit.

Example:

persistence(39) returns 3, because
3 * 9 = 27
2 * 7 = 14
1 * 4 = 4

persistence(4) returns 0 because 4 is already a one-digit number
*/

// Test Cases
console.log(persistence(39)); // 3
console.log(persistence(4));  // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4

// input - a single positive number
// output - a number

// examples   
// 39 = 27 = 14 = 4  - 3 iterations of multi
// 4 = 0 - already single digit - no iterations


// if number is 0-9 then just return 0;
// create iteration counter set to 1;
// loop
// - get all digits in number separate digits
// - multiply all digits together
// - if result is a single digit number then done and return iteration count
// - otherwise increment iteration counter and loop again but switch number 

function persistence(num) {
  if (num < 10) return 0;

  let count = 1;

  do {
    let mult = 1;
    String(num).split('').forEach(digit => {
      mult *= digit;
    });
    if (String(mult).length === 1) return count;
    count += 1;
    num = mult;
  }  while (true);
}

console.log(persistence(39)); // 3
console.log(persistence(4));  // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4