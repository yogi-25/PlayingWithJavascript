//a(); //it gives Typeerror because it doesnt allocate memory 
var a = function a()
{
    console.log("Its a function expression")
}

a();
b();
function b()
{
console.log("Its function statement")
}
//its function statement 