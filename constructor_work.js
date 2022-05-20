// function Animal(name, color, weight) {
//   this.name = name;
//   this.color = color;
//   this.weight = weight;

//   this.getInfo = function() {
//     return `${this.name} is the color ${this.color} and weighs ${this.weight}lbs.`;
//   };
// }

// Animal.prototype.getName = function() {
//   return this.name;
// };

// let mark = new Animal('Mark', 'black', 10);
// console.log(mark);
// console.log(mark.getName());
// console.log(mark.getInfo());


function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
console.log(global);
