const prompt = require("prompt-sync")();
let a = prompt("enter a number: ")
console.log(a)
function add()
{
    console.log("Addition of two number is ")
    var a = prompt("enter the first number")
    var b = prompt("enter the second number")
    console.log(a+b)


}
add();