// var a = document.getElementById("email");
// if(a)
// {
// a.addEventListener('click',function xyz(){
//     alert('Helloo');
// }
// )
// }
// else
// {
// console.log("Hello its wrong paged")
// }
























































//when javascript code execute then it create global execution context and push it into call stack
//browser->JS Engine ->Call stack ->GC
//In browser we have lots of superpowers which is ..https:,map,browser,many more..
//To access this we need web api ..


//-------------------------------Below browser contain following superpower --------------------------------
//Below is not a javascript . To access this superpower we use web api  it has one global object we call it as window->
//setTimeout ,dom api , fetch ,local storage , console ,location 
//Browser gives access to the JS Engine to acccess this superpower

console.log("Start")
setTimeout(function xyz()
{
    console.log("You are in");
},5000);
fetch("https://github.com/yogi-25").then(function xy(){
    console.log("enter into javascript zone ");
    
})





