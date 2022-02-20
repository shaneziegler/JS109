


//  Input -
//

//  Output -
//
 
//  Examples/Edge Cases
//

//  Data Structure?
//

//  Algorithm
//  

// JS 101-109 & 210-211 Interview Session at 12PM EST. 

// PROBLEM - 01
// Reverse or Rotate?
// Write a function that will modify a number according to the following: 
// Cut the input number into chunks of the given size. A chunk is a number that is `n` digits long, with n being given as the second argument. Ignore the last chunk if it's shorter than n digits. If a chunk represents an integer that is 'the sum of the cubes of its digits, divisible by 2', reverse the chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a number. Return -1 if conditions aren't right to accomplish the above. Return -1 if the given chunk size is not positive.

// console.log(revRot(123456987654, 6) === 234561876549); //--> 234561 876549
// console.log(revRot(123456987653, 6) === 234561356789); // --> 234561 356789
// console.log(revRot(66443875, 4) === 44668753); // --> 4466 8753
// console.log(revRot(66443875, 8) === 64438756); // --> 6443 8756
// console.log(revRot(664438769, 8) === 67834466); // --> 6783 4466
// console.log(revRot(123456779, 8) === 23456771); // --> 2345 6771
// console.log(revRot(0, 8) === -1); // --> -1
// console.log(revRot(123456779, 0) === -1); // --> -1 
// console.log(revRot(123, 4) === -1) // --> -1
// console.log(revRot(5630006557344, 2) === 650300567543); // --> 65 03 00 56 75 43


/*
  PEDAC
  PROBLEM
    - inputs, outputs, and define the rules of the problem (both implicit and explicit) 
    Inputs are two numbers, one representing the data we will operate on, and one representing the length of a 'chunk'
    Output is a number that followes some rules as defined by the problem.
    If the sum of the chunk's digits (cubed) is even, then we will reverse the chunk.
    If not, we will rotate the chunk to the left by one position.
    return the chunks joined into one number
    the first input number is 0, return -1.
    when our chunk size is 0, return -1.
    when our input number is smaller than our chunk size, return -1.
    assume that rotating the chunk means pulling a digit off the front, and appending it onto the back of the chunk.
    assume that 'digits' means each of the place values. 
    drop the end of a number that is less than your chunk length.
  
  ALGORITHM 
    if the input number is 0, return -1
    if the chunk length is 0, return -1 
    if the input number length is less than the chunk length, return -1
    
    // break input into chunks (maybe this will be a helper function since it takes multiple steps to accomplish) 
    (chunks are going to be an array of numerical strings) 
    (an array of numbers broken from the original number)
    (chunks could be represented in an object)
    
    
    iterate over the chunks 
      grab the current chunk 
      // if the chunk's cubed digits sum is even, reverse the chunk. 
      else // rotate the chunk
    end iteration 
    
    return joined chunk, cast as a number
    
    
    // break input into chunks (chunks) (it's a number) 
        declare variable `strInput` and init it to input cast as a string.
        create variable `chunks` and init to an empty array
        
        start iteration
          slice off the first length digits from the front of our `strInput`
          push that onto `chunks`
          reassin `strInput` to the current value of `strInput` with the used front chopped off. 
        end iteration 
        
        return `chunks`
    
    // cubed digits are even? (chunk) (strings) 
        create variable `digits` and init it to the numerical value of each `chunk`'s characters. 
        create variable `sum` and init it to 0.
        
        iterate over `digits`
          add the cube of the current digit to `sum`
        end iteration
        
        if `sum` is even, return `true`
        else return `false`
        
    // rotate the chunk by 1 position to the left. (chunk) (string) // 123 => 231
        create varaible `chars` and init to `chunk` broken on characters
        create variable `start` and init the removed first value of `chars`
        push `start` onto `chars`
        return `chars` joined on charactrs. 
    
    
  ALTERNATIVE ALGORITHM
    if the input number is 0, return -1
    if the chunk length is 0, return -1 
    if the input number length is less than the chunk length, return -1
    
    // break input into chunks (maybe this will be a helper function since it takes multiple steps to accomplish)
*/

function revRot(num, chunkLength) { 
  if (num === 0) return -1;
  if (chunkLength === 0) return -1;
  if (num.toString().length < chunkLength) return -1;
  
  const chunks = breakIntoChunks(num, chunkLength);
  console.log(chunks);
}

function breakIntoChunks(num, chunkLength) {
  let strInput = num.toString();
  const chunks = [];
  
  // for (let i = 0; i < strInput.length; i++) {
  //   const chunk = strInput.slice(i, chunkLength);
  //   chunks.push(chunk);
  //   i += chunkLength;
  // }
  
  while (true) {
    if (strInput.length < chunkLength) break;
    const chunk = strInput.slice(0, chunkLength);
    chunks.push(chunk);
    strInput = strInput.slice(chunkLength);
  } 
  
  return chunks;
}



console.log(revRot(123456987654, 6) === 234561876549); //--> 234561 876549
// console.log(revRot(123456987653, 6) === 234561356789); // --> 234561 356789
// console.log(revRot(66443875, 4) === 44668753); // --> 4466 8753
// console.log(revRot(66443875, 8) === 64438756); // --> 6443 8756
// console.log(revRot(664438769, 8) === 67834466); // --> 6783 4466
// console.log(revRot(123456779, 8) === 23456771); // --> 2345 6771
// console.log(revRot(0, 8) === -1); // --> -1
// console.log(revRot(123456779, 0) === -1); // --> -1 
// console.log(revRot(123, 4) === -1) // --> -1
// console.log(revRot(5630006557344, 2) === 650300567543); // --> 65 03 00 56 75 43




function revRot2(num, chunkLength) { /*...*/ }


Nullish coalescing operator (??)

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.