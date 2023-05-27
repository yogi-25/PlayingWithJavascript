//diffrence between let var and const
let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in i


// var	
// It is been available from the beginning of JavaScript
// It has function scope	It has block scope
//var a = 10 , var a =10 ..we can declare as many time as we can .

// let
// Introduced as part of ES6
// Variables will be hoisted	Hoisted but not initialized
//let can not allow us to declare var as many times as we can.


// If you never want a variable to change, const is the keyword to use.

// If you want to reassign values:

// and you want the hoisting behavior, var is the keyword to use
// if you don't want it, let is the keyword for you