// Task
// The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

// Input/Output
// [input] integer year
// 1000 ≤ year ≤ 9000

// [output] an integer
// the minimum year number that is strictly larger than the input number year and all its digits are distinct.

// DS
// integer for year answer
// maybe an array to hold the 4 digits of the year?

// Algo
// inputyear
// loop upwards until a unique year is found
// start at inputyear + 1
// create helper function that checks if a year has unqiqu digits
// start at inputyear + 1
// do while loop until unique year found otherwise increment year
// - helpfunction
//   take in a year in number format
//   rules says will be 4 digits always
//   convert num to array of 4 elements
//   set dup flag to false
//   loop over all 4 elments and set dup to true, if dup found
//   do this by creating the array without the digit we are trying to test at that time
//   if no dup found, return true for uniqueyear


function uniqueYear(year) {
  let dup = false;
  let orgYearArray = String(year).split('');
  // console.log(orgYearArray);
  
  for(let i = 0; i <= 3; i++) {
      let tempArray = orgYearArray.slice();
      tempArray.splice(i, 1);
      // console.log(tempArray);
      if (tempArray.includes(orgYearArray[i])) {
        dup = true;
      }
  }
  return !dup;
}

function distinctDigitYear(year) {
  year++;
  while (!uniqueYear(year)) {
    year++;
  }
  
  return year;  
}

console.log(distinctDigitYear(1987)); 