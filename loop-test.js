// Write a function that takes two objects and returns an array of objects containing key/value pairs from the first object that are in the second object.

// Input
//  Two objects - {}, {a: 0}

// Output
// Array of object - [{a: 0}, {b: 1}]

// Examples/Edge Cases
// {} - empty objects
// falsy values? - undefined, null, 0 , false, Nan, ""
// Nan on a compare is an issue

// {}, {} = []
// {}, {a: 1} = []
// {a: 1}, {a: 1} = [{a: 1}]
// {a: Nan}, {a: Nan} = [{a: nan}]
// {a: ''}, {a: ''} = [{a: ''}]
// {a: 1}, {b: 1} = []
// {a: '1'}, {a: 1} = []
// {A: 1}, {a: 1} = []

// Data structures
// An array to hold the final output objects
// An object to hold seen key/value pairs?

// Algo
// Create an empty array
// If either input object are empty, then just return the empty array
// no - Make copy of first object
// Iterate over the properties of the first object
//  - if first object property name in second object property then
//    - compare first object prop value to second obj prop value.  if first prop value is NaN data type then use .isNan
//    - if prop values equal, then add key/value pair to array

function match(obj1, obj2) {
  let outputArray = [];

  if (Object.keys(obj1).length === 0 || Object.keys(obj2).length === 0) {
    return outputArray;
  }

  for (obj1Prop in obj1) {
    if (obj2.hasOwnProperty(obj1Prop)) {
      if (obj1[obj1Prop] === obj2[obj1Prop]) {
        outputArray.push({[obj1Prop]: obj1[obj1Prop]});
      } else if (isNaN(obj1[obj1Prop]) && isNaN(obj2[obj1Prop])) {
        outputArray.push({[obj1Prop]: obj1[obj1Prop]});
      }
    }
    
  }
  return outputArray;
}

console.log(match({},{}));

console.log(match({a: 1}, {a: 1}));

console.log(match({a: 1}, {b: 1}));
console.log(match({a: 1}, {a: 2}));

console.log(match({a: 1, b: 2, c: 3, e:2, f:1}, {a: 1, b:2, c:3, d:4, e:1}));
console.log(match({a: NaN}, {a: NaN}));
console.log(match({a: undefined}, {a: undefined}));
console.log(match({a: null}, {a: null}));

console.log(match({a: null}, {a: undefined}));
console.log(match({},{a: 1}));
console.log(match({a: 1}, {a: NaN}));
console.log(match({},{}));
console.log(match({a: 1}, {A: 1}));
console.log(match({a: true}, {a: true}));
console.log(match({a: true}, {a: false}));
console.log(match({a: false}, {a: false}));