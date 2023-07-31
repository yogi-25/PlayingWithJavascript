//How to take input from user
const prompt = require("prompt-sync")();
let a = prompt("enter a number: ")
console.log(a);
function add()
{
    console.log("Addition of two number is ")
    var a = parseInt(prompt("enter the first number"))
    var b = parseInt(prompt("enter the second number"))
    prompt(typeof a)
    console.log(a+b)


}
add();
