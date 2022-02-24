temp.md
Array.prototype.at()
The at() method takes an integer value 
node


Logical AND assignment (&&=)
The logical AND assignment (x &&= y) operator only assigns if x is truthy.

Logical AND assignment short-circuits as well meaning that x &&= y is equivalent to:
x && (x = y);

And not equivalent to the following which would always perform an assignment:
x = x && y;


String.prototype.localeCompare()

The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// expected output: 0

Return value
A negative number if referenceStr occurs before compareString; positive if the referenceStr occurs after compareString; 0 if they are equivalent.
Warning: Do not rely on exact return values of -1 or 1!

Good for sorting word with upper and lowercase letter or special cases like above.
 
 let b = 'b';
 let c = 'C';

 b < c
 false

b.localeCompare(c);
-1

let arr1 = [ 'C', 'z', 'a', 'B', 'd' ];
arr1.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
})
console.log(arr1);
> [ 'B', 'C', 'a', 'd', 'z' ]

let arr1 = [ 'C', 'z', 'a', 'B', 'd' ];
arr1.sort((a, b) => {
  return a.localeCompare(b);
})
console.log(arr1);
> [ 'a', 'B', 'C', 'd', 'z' ]

010433459