function makeFibo() {
  let memo = [0, 1]; // Initial Fibo values 0 and 1
  
  return function (num) {
    if (num < memo.length) {
      return {fibo: num, value: memo[num], iterations: 0, directLookup: 'yes'};
    } else {
      let iterations = 0;
      for (let i = memo.length; i <= num; i++, iterations++) {
        memo[i] = memo[i - 2] + memo[i - 1];
      }
      return {fibo: num, value: memo[num], iterations: iterations, directLookup: 'no'};
    }  
  } 
}

let x = makeFibo();
console.log(x(0));
console.log(x(1));
console.log(x(2));
console.log(x(6));
console.log(x(4));
let y = makeFibo();
console.log(y(4));
console.log(x(3));
console.log(x(9));
console.log(y(9));
console.log(y(5));
console.log(y(10));
