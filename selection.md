1 let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

8 selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

10 function selectFruit(produceList) {
11  let produceKeys = Object.keys(produceList);
12  let selectedFruits = {};

14  for (let counter = 0; counter < produceKeys.length; counter++) {
15    let currentKey = produceKeys[counter];
16    let currentValue = produceList[currentKey];

18    if (currentValue === 'Fruit') {
19      selectedFruits[currentKey] = currentValue;
20    }
21  }

23  return selectedFruits;
24 }


On line 1, the variable `produce` is declared and initialized to reference an object with 4 key/value pairs.  
Lines 10 - 24 declare the function `selectFruit` which takes one argument, an object. 
On line 8, the `selectFruit` function is invoked and a pointer to the the object `produce` is passed-by-reference to it as an argument to the parameter `produceList`.  `produce` and `produceList` now reference the same array/object in memory.
On line 11, the variable `produceKeys` is declared and initialized to reference the array which is returned by the static method `Object.keys()`.  `Object.keys()` accepts an `object` as its argument and returns a new array consisting of the keys/property names of the `object`. `['apple`, `carrot`, `pear`, `broccoli`]
On line 12, the variable `selectedFruits` is declared and initialized to reference the empty object `{}`.
Lines 14 - 21 to define a loop that will execute until the condition `counter < produceKeys.length` is found to be `true`. When the loop begins, it first declares and initializes the block scoped variable `counter` to `0`.  On each iteration of the loop, `counter` will be incremented by `1`.
On line 15, the block scoped variable `currentKey` is declared and initialized to the string value held by the `counter` index position of the array pointed to by `produceKeys`. Which would be `apple` on the first iteration of the loop.
On line 16, the block scoped variable `currentValue` is declared and initialized to the string value held by the object property `produceList[currentKey]`.  On the first iteration of the loop that would essentially be `produceList['apple']` or the value `Fruit`.
On line 18, the conditional part of the `if` statement checks the returned value of its expression `currentValue === 'Fruit'`.  On the first iteration, `currentValue` does equal the string `Fruit`, so the expression evaluates to `true` and the code block is executed.
On line 19, the property `currentKey` is added(could be a reassignment also, but not in this case) to the object `selectedFruits` and assigned the string value held by the variable `currentValue`.  So after the first iteration of the loop, the `selectedFruits` object would like like this { apple: 'Fruit`}.
On line 23, the object `selectedFruits` is returned from the function.